import { ok } from "@/lib/api-response";
import { quotes } from "@/lib/quotes";

export async function GET() {
  return ok(quotes, { count: quotes.length });
}
