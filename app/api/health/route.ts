import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "uxquote-api",
    checkedAt: new Date().toISOString()
  });
}
