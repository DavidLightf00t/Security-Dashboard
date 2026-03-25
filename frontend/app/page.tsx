import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Radar,
  Lock,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { auth0 } from "@/lib/auth0";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description:
      "Built with a security-first mindset to help you monitor and respond with confidence.",
  },
  {
    icon: Radar,
    title: "Real-time visibility",
    description:
      "Surface meaningful activity and keep track of what matters as it happens.",
  },
  {
    icon: Lock,
    title: "Controlled access",
    description:
      "Protect sensitive operations with modern authentication and role-aware access.",
  },
  {
    icon: Activity,
    title: "Actionable intelligence",
    description:
      "Turn raw events into clear signals so you can make faster, better decisions.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060812] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/8 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <ShieldCheck className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Sentinel</p>
              <p className="text-xs text-slate-400">Security dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/5"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-500"
            >
              <Link href="/sign-up">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        <section className="flex flex-1 items-center py-16 md:py-24">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200">
                Security operations, simplified
              </div>

              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Watch your environment with confidence using{" "}
                <span className="text-blue-400">Sentinel</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Sentinel gives you a focused way to observe security events,
                surface meaningful signals, and stay in control of your network
                activity.
              </p> 

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Fast, modern interface
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Built for security workflows
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Ready to scale
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <Card className="w-full border-white/10 bg-white/[0.04]">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">System status</p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        Protected
                      </p>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                      Online
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      ["Authentication", "Secured"],
                      ["Monitoring", "Active"],
                      ["Visibility", "Enabled"],
                      ["Alerting", "Ready"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                      >
                        <span className="text-sm text-slate-300">{label}</span>
                        <span className="text-sm font-medium text-white">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-blue-500/15 bg-blue-500/10 p-4">
                    <p className="text-sm font-medium text-blue-100">
                      Focused, professional security operations.
                    </p>
                    <p className="mt-1 text-sm text-blue-200/80">
                      Sentinel helps you stay aware without overwhelming you
                      with noise.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="border-white/10 bg-white/[0.03]"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h2 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
