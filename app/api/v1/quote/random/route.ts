import { ok } from "@/lib/api-response";
import { getRandomQuote } from "@/lib/quotes";

export async function GET() {
  return ok(getRandomQuote(), { cache: "none" });
}
