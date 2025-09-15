import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { loginWithGoogle } from "../../api/api.ts";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const mutation = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: () => {
      console.log("Login successful:");
    },
    onError: () => {
      console.error("Login failed:");
    },
  });

  return (
    <main className="grid min-h-screen bg-background md:grid-cols-2">
      {/* Left: Content */}
      <section className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* Brand */}
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-semibold"
          >
            <Calendar className="h-5 w-5" />
            <span>Timora</span>
          </Link>

          {/* Mobile illustration placeholder */}
          <div className="mb-8 grid aspect-[4/3] place-items-center  bg-muted text-sm text-muted-foreground md:hidden">
            <img src="/cursor-calendar.png" alt="Calendar Illustration" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome to Timora
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your smart calendar companion for seamless scheduling and
            productivity
          </p>

          {/* Single Sign in with Google Button */}
          <Button
            onClick={() => mutation.mutate()}
            size="lg"
            className="mt-6 w-full bg-slate-900 text-white hover:bg-slate-800 hover:cursor-pointer"
          >
            <GoogleIcon className="mr-2 h-5 w-5" /> Continue with Google
          </Button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <a className="underline" href="#">
              Terms & Privacy Policy
            </a>
          </p>
        </div>
      </section>

      {/* Right: Illustration (desktop only) */}
      <section className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700 p-8 text-white md:flex">
        {/* Glow circles */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 w-full max-w-lg">
          {/* Floating icons */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 grid size-12 place-items-center rounded-full bg-white/10 backdrop-blur">
              <Calendar className="size-5" />
            </div>
            <div className="absolute -right-6 top-10 grid size-12 place-items-center rounded-full bg-white text-blue-700">
              <GoogleIcon className="size-5" />
            </div>
          </div>

          {/* App preview card */}
          <div className="mx-auto mt-8 rounded-xl bg-white p-4 text-slate-900 shadow-xl">
            <div className="rounded-lg border bg-slate-50 p-4">
              <div className="mb-2 h-3 w-24 rounded bg-slate-200" />
              <div className="space-y-2">
                <div className="h-10 rounded-md bg-white shadow-sm" />
                <div className="h-10 rounded-md bg-white shadow-sm" />
                <div className="h-10 rounded-md bg-white shadow-sm" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 text-center">
            <h3 className="text-xl font-semibold">
              Connect with every application.
            </h3>
            <p className="mt-1 text-white/80">
              Everything you need in an easily customizable dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  // Lightweight Google "G" logo SVG
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.24-1.66 3.64-5.5 3.64-3.31 0-6-2.74-6-6.14s2.69-6.14 6-6.14c1.89 0 3.16.8 3.88 1.49l2.64-2.56C16.66 3.07 14.53 2 12 2 6.99 2 3 6.03 3 11.6S6.99 21.2 12 21.2c6.03 0 9.99-4.23 9.99-10.18 0-.68-.07-1.2-.17-1.72H12z"
      />
    </svg>
  );
}

export default Login;
