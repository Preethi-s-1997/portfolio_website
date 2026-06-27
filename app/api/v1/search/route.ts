import { badRequest, ok } from "@/lib/api-response";
import { searchQuotes } from "@/lib/quotes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";

  if (!query.trim()) {
    return badRequest("Missing required search parameter: q.");
  }

  const results = searchQuotes(query);
  return ok(results, { count: results.length, query });
}
