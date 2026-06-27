import { PrismaClient } from "@prisma/client";
import { categories, quotes } from "../lib/quotes";

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.upsert({
    where: { code: "FREE" },
    update: {},
    create: {
      code: "FREE",
      name: "Free",
      monthlyPriceCents: 0,
      requestLimit: 1000,
      apiKeyLimit: 1,
      features: ["Daily quote", "Random quote", "Category endpoints"]
    }
  });

  await prisma.plan.upsert({
    where: { code: "PRO" },
    update: {},
    create: {
      code: "PRO",
      name: "Pro",
      monthlyPriceCents: 1200,
      requestLimit: 100000,
      apiKeyLimit: 5,
      features: ["Higher limits", "Analytics", "Commercial usage"]
    }
  });

  await prisma.plan.upsert({
    where: { code: "ENTERPRISE" },
    update: {},
    create: {
      code: "ENTERPRISE",
      name: "Enterprise",
      monthlyPriceCents: 0,
      requestLimit: 10000000,
      apiKeyLimit: 100,
      features: ["Custom limits", "SLA", "Private collections"]
    }
  });

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category
    });
  }

  for (const quote of quotes) {
    const category = await prisma.category.findUniqueOrThrow({ where: { slug: quote.category } });
    await prisma.quote.upsert({
      where: { id: quote.id },
      update: {
        text: quote.text,
        author: quote.author,
        source: quote.source,
        tags: quote.tags,
        featured: quote.featured ?? false,
        status: "PUBLISHED",
        publishedAt: new Date(),
        categoryId: category.id
      },
      create: {
        id: quote.id,
        text: quote.text,
        author: quote.author,
        source: quote.source,
        tags: quote.tags,
        featured: quote.featured ?? false,
        status: "PUBLISHED",
        publishedAt: new Date(),
        categoryId: category.id
      }
    });
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
