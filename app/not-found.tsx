import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-primary">Page not found</h1>
        <p className="mt-4 text-secondary">The route you requested is not part of this portfolio build.</p>
        <Button asChild className="mt-8" variant="secondary">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
