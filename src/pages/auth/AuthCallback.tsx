import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Calendar, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jwtDecode } from "jwt-decode";

function AuthCallback() {
  const [params] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const status = params.get("status");
    const msg = params.get("message");
    const token = params.get("token");

    if (status === "error") {
      setError(msg || "Authentication error");
      return;
    }
    if (token) {
      try {
        const user = jwtDecode(token);

        localStorage.setItem("auth_token", JSON.stringify(user));
        window.location.href = "/app";
        return;
      } catch (e) {
        console.error("JWT decode failed", e);
        setError("Invalid login token. Please try again.");
      }
    } else {
      setError("No token received. Please try again.");
    }
  }, [params]);

  console.log("Error state:", error);

  if (error) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-6 inline-flex items-center gap-2 font-semibold">
            <Calendar className="h-5 w-5" />
            <span>Timora</span>
          </div>

          <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
            <div className="flex items-start gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Authentication Failed</h2>
                <p className="mt-1 text-sm text-muted-foreground">{error}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button
                onClick={() => (window.location.href = "/login")}
                size="lg"
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/")}
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 inline-flex items-center gap-2 font-semibold">
          <Calendar className="h-5 w-5" />
          <span>Timora</span>
        </div>
        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="mt-3 text-base font-medium">
              <span className="animate-pulse">Signing you in…</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              This will only take a moment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthCallback;
