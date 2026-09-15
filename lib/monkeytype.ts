import { USER } from "@/data/user";
import { eachDayOfInterval, formatISO } from "date-fns";

export type MonkeytypeActivityDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type MonkeytypePersonalBest = {
  id: string;
  mode: "time" | "words";
  label: string;
  wpm: number;
  accuracy: number;
  consistency: number;
  language: string;
};

export type MonkeytypeActivityResponse = {
  username: string;
  activity: MonkeytypeActivityDay[];
  personalBests: MonkeytypePersonalBest[];
  totalTests: number;
};

type MonkeytypeBestEntry = {
  acc?: number;
  consistency?: number;
  language?: string;
  wpm?: number;
};

type MonkeytypeProfilePayload = {
  message?: string;
  data?: {
    name?: string;
    personalBests?: {
      time?: Record<string, MonkeytypeBestEntry[]>;
      words?: Record<string, MonkeytypeBestEntry[]>;
    };
    testActivity?: {
      testsByDays?: Array<number | null>;
      lastDay?: number;
    };
  };
};

const MS_PER_DAY = 86_400_000;
const MONKEYTYPE_PROFILE_URL = `https://api.monkeytype.com/users/${USER.username}/profile`;

function toLevel(count: number): MonkeytypeActivityDay["level"] {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

const TIME_MODE_ORDER = ["15", "30", "60", "120"];
const WORDS_MODE_ORDER = ["10", "25", "50", "100"];

function formatWpm(wpm: number) {
  return Number(wpm.toFixed(0));
}

function pickBest(entries: MonkeytypeBestEntry[] | undefined) {
  if (!entries?.length) return undefined;
  return [...entries].sort((a, b) => (b.wpm ?? 0) - (a.wpm ?? 0))[0];
}

function toPersonalBest(
  mode: MonkeytypePersonalBest["mode"],
  duration: string,
  entry: MonkeytypeBestEntry,
): MonkeytypePersonalBest | null {
  if (typeof entry.wpm !== "number") return null;

  return {
    id: `${mode}-${duration}`,
    mode,
    label: mode === "time" ? `${duration}s` : `${duration} words`,
    wpm: formatWpm(entry.wpm),
    accuracy: Number((entry.acc ?? 0).toFixed(0)),
    consistency: Number((entry.consistency ?? 0).toFixed(0)),
    language: entry.language ?? "english",
  };
}

export function extractPersonalBests(
  personalBests: NonNullable<MonkeytypeProfilePayload["data"]>["personalBests"],
): MonkeytypePersonalBest[] {
  const results: MonkeytypePersonalBest[] = [];
  const timeBests = personalBests?.time ?? {};
  const wordBests = personalBests?.words ?? {};

  const timeKeys = [
    ...TIME_MODE_ORDER.filter((key) => key in timeBests),
    ...Object.keys(timeBests).filter((key) => !TIME_MODE_ORDER.includes(key)),
  ];
  const wordKeys = [
    ...WORDS_MODE_ORDER.filter((key) => key in wordBests),
    ...Object.keys(wordBests).filter((key) => !WORDS_MODE_ORDER.includes(key)),
  ];

  for (const duration of timeKeys) {
    const best = pickBest(timeBests[duration]);
    if (!best) continue;
    const item = toPersonalBest("time", duration, best);
    if (item) results.push(item);
  }

  for (const duration of wordKeys) {
    const best = pickBest(wordBests[duration]);
    if (!best) continue;
    const item = toPersonalBest("words", duration, best);
    if (item) results.push(item);
  }

  return results;
}

export function testActivityToCalendar(
  testsByDays: Array<number | null>,
  lastDay: number,
): MonkeytypeActivityDay[] {
  const lastIndex = testsByDays.length - 1;

  return testsByDays.map((value, index) => {
    const date = new Date(lastDay - (lastIndex - index) * MS_PER_DAY);
    const count = value ?? 0;

    return {
      date: date.toISOString().slice(0, 10),
      count,
      level: toLevel(count),
    };
  });
}

export function filterActivityToCurrentYear(
  activity: MonkeytypeActivityDay[],
  now = new Date(),
): MonkeytypeActivityDay[] {
  const year = now.getFullYear();
  const byDate = new Map(
    activity
      .filter((day) => day.date.startsWith(`${year}-`))
      .map((day) => [day.date, day]),
  );

  return eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  }).map((day) => {
    const date = formatISO(day, { representation: "date" });
    return byDate.get(date) ?? { date, count: 0, level: 0 };
  });
}

export async function getMonkeytypeActivity(): Promise<MonkeytypeActivityResponse> {
  const response = await fetch(MONKEYTYPE_PROFILE_URL, {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Monkeytype profile request failed (${response.status})`);
  }

  const payload = (await response.json()) as MonkeytypeProfilePayload;
  const testsByDays = payload.data?.testActivity?.testsByDays;
  const lastDay = payload.data?.testActivity?.lastDay;

  if (!testsByDays?.length || typeof lastDay !== "number") {
    throw new Error("Monkeytype testActivity is missing from the profile");
  }

  const activity = filterActivityToCurrentYear(
    testActivityToCalendar(testsByDays, lastDay),
  );

  return {
    username: payload.data?.name ?? USER.username,
    activity,
    personalBests: extractPersonalBests(payload.data?.personalBests),
    totalTests: activity.reduce((sum, day) => sum + day.count, 0),
  };
}
