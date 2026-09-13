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
      { error: "Failed to fetch Monkeytype activity" },
      { status: 502 },
    );
  }
}
