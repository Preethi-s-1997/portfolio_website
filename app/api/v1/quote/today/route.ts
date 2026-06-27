import { ok } from "@/lib/api-response";
import { getQuoteOfTheDay } from "@/lib/quotes";

export async function GET() {
  return ok(getQuoteOfTheDay(), { cache: "daily" });
}
