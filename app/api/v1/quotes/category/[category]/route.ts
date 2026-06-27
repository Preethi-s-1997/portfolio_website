import { badRequest, ok } from "@/lib/api-response";
import { categories, getQuotesByCategory } from "@/lib/quotes";

export async function GET(_: Request, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const exists = categories.some((item) => item.slug === category);

  if (!exists) {
    return badRequest("Unknown quote category.");
  }

  const results = getQuotesByCategory(category);
  return ok(results, { count: results.length, category });
}
