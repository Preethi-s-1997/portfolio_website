import { NextResponse } from "next/server";

export function ok<T>(data: T, meta?: Record<string, unknown>) {
  return NextResponse.json({
    data,
    meta: {
      version: "v1",
      servedAt: new Date().toISOString(),
      ...meta
    }
  });
}

export function badRequest(message: string) {
  return NextResponse.json(
    {
      error: {
        code: "bad_request",
        message
      }
    },
    { status: 400 }
  );
}
