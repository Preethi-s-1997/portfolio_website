import { ok } from "@/lib/api-response";

function createDemoKey() {
  const entropy = crypto.randomUUID().replaceAll("-", "").slice(0, 18);
  return {
    id: crypto.randomUUID(),
    name: "Development key",
    key: `uxq_dev_${entropy}`,
    createdAt: new Date().toISOString()
  };
}

export async function POST() {
  return ok(createDemoKey());
}

export async function DELETE(request: Request) {
  const body = await request.json().catch(() => ({}));
  return ok({
    revoked: true,
    id: body.id ?? null,
    key: body.key ?? null
  });
}
