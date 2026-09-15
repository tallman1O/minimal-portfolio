import { getMonkeytypeActivity } from "@/lib/monkeytype";

export async function GET() {
  try {
    const data = await getMonkeytypeActivity();
    return Response.json(data, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return Response.json(
      {
        username: "",
        activity: [],
        personalBests: [],
        totalTests: 0,
      },
      { status: 200 },
    );
  }
}
