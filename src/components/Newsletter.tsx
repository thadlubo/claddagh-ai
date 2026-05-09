import { useState, type FormEvent } from "react";
import { FloatingParticles } from "./Decorations";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitted");
  }

  return (
    <section
      id="matchlist"
      className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="matchlist-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(15,107,79,0.10), transparent 70%)," +
            "radial-gradient(ellipse 40% 25% at 50% 100%, rgba(201,164,92,0.10), transparent 70%)",
        }}
      />

      <div className="container-x relative">
        <div
          className="relative mx-auto max-w-3xl rounded-[28px] overflow-hidden
                     bg-gradient-to-br from-claddagh-deep via-claddagh-rich to-claddagh-deep
                     text-claddagh-ivory border border-claddagh-deep/40
                     shadow-[0_30px_80px_rgba(6,78,59,0.25)]"
        >
          <div
            aria-hidden
            className="absolute inset-0 noise opacity-25 mix-blend-overlay"
          />
          <div
            aria-hidden
            className="absolute -inset-24 [mask-image:radial-gradient(closest-side,white,transparent_70%)]
                       bg-claddagh-gold/10"
          />
          <FloatingParticles count={14} tone="ivory" className="opacity-80" />

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <p className="text-xs uppercase tracking-ultra-wide text-claddagh-goldsoft mb-3">
              Citizen Matchlist · Cohort 2042
            </p>
            <h2
              id="matchlist-heading"
              className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] tracking-tight text-balance"
            >
              Join the{" "}
              <span className="italic font-editorial text-claddagh-goldsoft">
                Matchlist
              </span>
            </h2>
            <p className="mt-4 text-claddagh-ivory/80 max-w-xl mx-auto">
              Be among the first citizens notified when CladdaghAI begins
              public compatibility trials.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-8 mx-auto flex flex-col sm:flex-row items-center gap-3 max-w-xl"
              aria-label="Matchlist signup"
            >
              <label htmlFor="approved-email" className="sr-only">
                Email address
              </label>
              <div className="flex-1 w-full relative">
                <input
                  id="approved-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your approved email"
                  disabled={status === "submitted"}
                  className="w-full rounded-full px-5 py-3.5
                             bg-white/95 text-claddagh-charcoal placeholder:text-claddagh-charcoal/45
                             border border-white/20
                             focus:outline-none focus:ring-2 focus:ring-claddagh-goldsoft/70
                             focus:border-transparent transition
                             disabled:opacity-70"
                />
                <span
                  aria-hidden
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-claddagh-gold text-xs"
                >
                  ✦
                </span>
              </div>
              <button
                type="submit"
                disabled={status === "submitted"}
                className="btn-gold w-full sm:w-auto whitespace-nowrap disabled:opacity-80"
              >
                {status === "submitted" ? "Request Received" : "Request Access"}
                <span aria-hidden>→</span>
              </button>
            </form>

            {status === "submitted" && (
              <p
                role="status"
                className="mt-5 text-sm text-claddagh-goldsoft"
              >
                Your interest has been logged with the Ministry of
                Belonging. A compatibility officer will reach out, eventually.
              </p>
            )}

            <p className="mt-6 text-[11px] text-claddagh-ivory/55 max-w-md mx-auto">
              By joining, you agree to receive speculative communications
              from a fictional design project. Your email is not actually
              stored or sent anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
