import Link from "next/link";
import { ArrowLeft, Github, KeyRound, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-background px-4 py-8 text-primary lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <section className="mx-auto flex w-full max-w-xl flex-col justify-between py-4 lg:py-8">
        <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm text-secondary hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="py-12">
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-md border border-primary/20 bg-primary text-background">
            UQ
          </div>
          <h1 className="text-5xl font-semibold tracking-normal text-primary">
            Login to manage quote APIs.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-secondary">
            Access API keys, copy quote endpoints, and test UI/UX quote responses before adding them to your site.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-secondary sm:grid-cols-3">
          <div className="rounded-md border border-border bg-surface p-4">
            <KeyRound className="mb-4 h-4 w-4 text-primary" />
            API keys
          </div>
          <div className="rounded-md border border-border bg-surface p-4">
            <Lock className="mb-4 h-4 w-4 text-primary" />
            Secure login
          </div>
          <div className="rounded-md border border-border bg-surface p-4">
            <Mail className="mb-4 h-4 w-4 text-primary" />
            Team access
          </div>
        </div>
      </section>

      <section className="grid place-items-center">
        <Card className="w-full max-w-md p-6">
          <div>
            <p className="text-sm font-medium text-secondary">Welcome back</p>
            <h2 className="mt-2 text-3xl font-semibold text-primary">Sign in</h2>
          </div>

          <form className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-primary">
              Email
              <input
                className="focus-ring h-11 rounded-md border border-border bg-background px-3 text-sm text-primary placeholder:text-zinc-600"
                placeholder="designer@example.com"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-primary">
              Password
              <input
                className="focus-ring h-11 rounded-md border border-border bg-background px-3 text-sm text-primary placeholder:text-zinc-600"
                placeholder="Enter password"
                type="password"
              />
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-secondary">
                <input className="h-4 w-4 rounded border-border bg-background" type="checkbox" />
                Remember me
              </label>
              <Link href="/dashboard" className="text-primary hover:text-secondary">
                Forgot password?
              </Link>
            </div>
            <Button asChild size="lg" variant="primary">
              <Link href="/dashboard">Login and open dashboard</Link>
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-secondary">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <Button asChild className="w-full" size="lg" variant="secondary">
            <Link href="/dashboard">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </Link>
          </Button>

          <p className="mt-6 text-center text-sm text-secondary">
            New here?{" "}
            <Link href="/dashboard" className="text-primary hover:text-secondary">
              Create a free API account
            </Link>
          </p>
        </Card>
      </section>
    </main>
  );
}
