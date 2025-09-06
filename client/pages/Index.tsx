import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LineChart, LockKeyhole, Users } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const GOOGLE_FORM_ID = "1FAIpQLSe8fWDhGi3fwY0N6sadmU9JBIv8YNYwOANFLHM2E9lbuxKXbw";

export default function Index() {
  const featuresRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -z-10 inset-0 grid-surface opacity-30" />
        <div className="absolute -z-10 inset-0 noise-overlay" />
        <div className="container pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Now inviting early traders
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="brand-text">Trade with a Prompt.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl">
              Build, backtest, and deploy crypto strategies in plain English—no code, no charts, no spreadsheets.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="neon" className="px-8">Join the Beta</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl glass p-0 overflow-hidden">
                  <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="text-2xl">Request Early Access</DialogTitle>
                    <DialogDescription>
                      We use Google Forms to collect your request. Your information is kept private.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
                      <iframe
                        src={`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?embedded=true`}
                        width="100%"
                        height="900"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                      >
                        Loading…
                      </iframe>
                    </div>
                    <p className="mt-2 text-xs text-white/60">
                      Having trouble? <a className="underline" href={`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform`} target="_blank" rel="noopener">Open the form</a>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              <a href="#features">
                <Button variant="glass" className="px-8">Learn More</Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <TrustBadge icon={<LockKeyhole className="w-4 h-4" />} text="Non-custodial" />
              <TrustBadge icon={<LineChart className="w-4 h-4" />} text="Backtested" />
              <TrustBadge icon={<Users className="w-4 h-4" />} text="Built for Traders" />
            </div>
          </div>

          <div className="relative h-[300px] md:h-[420px]">
            <div className="absolute inset-0 rounded-2xl glass grid-surface overflow-hidden">
              <AnimatedChart />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" ref={featuresRef} className="container py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">What PromptFi does</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Prompt → Plan" desc="Turn plain-English prompts into structured strategies." />
          <FeatureCard title="One-click Backtests" desc="See performance, drawdowns, hit rate instantly." />
          <FeatureCard title="Smart Risk Guards" desc="Bands, turnover caps, cooldowns, slippage limits." />
          <FeatureCard title="Deploy Non-Custodially" desc="Keep control of funds; plug into your wallet." />
          <FeatureCard title="Community Strategies" desc="Browse, copy, and co-invest with other users." />
          <FeatureCard title="Explain in English" desc="Clear entry/exit rules and rationale." />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">How it Works</h2>
        <div className="space-y-6 max-w-3xl">
          <Step idx={1} title="Describe your idea" text="Enter a prompt like “equal-weight BTC/ETH with 20D SMA and sentiment > 0.3”." />
          <Step idx={2} title="Review the plan" text="We generate rules, universe, risk, and constraints in human-readable format." />
          <Step idx={3} title="Backtest & Activate" text="Inspect stats and equity curve, then deploy when you’re happy." />
        </div>
      </section>


      {/* Social strip */}
      <section className="border-y border-white/10 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80">Join the community — Get updates, drops, and beta invites.</p>
          <div className="flex items-center gap-3">
            <SocialButtons />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">FAQ</h2>
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Is PromptFi non-custodial?</AccordionTrigger>
              <AccordionContent>Yes. You retain control of your assets and connect your own wallet to execute strategies.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How do backtests work?</AccordionTrigger>
              <AccordionContent>We simulate your rules on historical data with realistic slippage and fees for transparent results.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Which assets are supported?</AccordionTrigger>
              <AccordionContent>Major crypto assets and pairs to start; we’re expanding coverage based on demand.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How is risk managed?</AccordionTrigger>
              <AccordionContent>Through configurable guards like drawdown bands, turnover caps, cooldowns, and slippage limits.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>When will the beta launch?</AccordionTrigger>
              <AccordionContent>We’re onboarding a limited set of traders now. Request access to join the list.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-white/70">
      <span className="glass p-1.5 inline-flex">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass p-6 md:p-7 hover:translate-y-[-2px] transition-transform">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-xl brand-gradient" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-white/70 text-sm mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Step({ idx, title, text }: { idx: number; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-8 w-8 shrink-0 rounded-xl brand-gradient flex items-center justify-center font-bold text-sm">{idx}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-white/70 text-sm mt-1">{text}</div>
      </div>
    </div>
  );
}

function AnimatedChart() {
  return (
    <svg viewBox="0 0 600 400" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--brand-cyan))" />
          <stop offset="100%" stopColor="hsl(var(--brand-purple))" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round">
        <path className="animate-dash" strokeDasharray="1000" d="M0,300 C80,280 120,260 160,280 S240,340 300,300 360,220 420,260 500,360 600,300" />
        <path className="animate-dash" strokeDasharray="1000" opacity=".4" d="M0,260 C100,240 160,220 220,240 S300,300 360,260 420,180 480,220 540,320 600,260" />
        <path className="animate-dash" strokeDasharray="1000" opacity=".2" d="M0,340 C120,320 200,300 260,320 S340,380 420,340 480,260 540,300 580,360 600,340" />
      </g>
    </svg>
  );
}


function SocialButtons() {
  const LINKS = {
    discord: (import.meta as any).env?.VITE_DISCORD_INVITE || "https://discord.com/invite",
    twitter: (import.meta as any).env?.VITE_TWITTER_URL || "https://twitter.com",
    linkedin: (import.meta as any).env?.VITE_LINKEDIN_URL || "https://www.linkedin.com",
  };
  return (
    <div className="flex gap-3">
      <a href={LINKS.discord} target="_blank" rel="noopener" aria-label="Discord" className="glass p-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.208.371-.45.864-.617 1.255a18.27 18.27 0 00-4.884 0A12.3 12.3 0 0010.44 3c-1.4.157-2.76.463-4.058.912C2.873 7.02 2 9.58 2 12.272c0 0 1.054 1.815 3.828 2.18 0 0 .465-.636.846-1.19-1.603-.48-2.206-1.485-2.206-1.485s.148.106.416.257c.015.01.03.018.046.027.04.023.081.046.125.068.36.182.72.325 1.053.441.59.212 1.294.408 2.112.552.538.096 1.11.18 1.718.24.863.086 1.784.116 2.748.023a15.25 15.25 0 001.725-.241c.818-.144 1.522-.34 2.111-.552a11.58 11.58 0 001.178-.509c.474-.234.75-.409.75-.409s-.603 1.004-2.206 1.485c.381.554.846 1.19.846 1.19 2.774-.365 3.828-2.18 3.828-2.18 0-2.693-.873-5.252-2.623-7.903zM9.68 13.504c-.828 0-1.505-.737-1.505-1.646 0-.909.669-1.652 1.505-1.652.836 0 1.51.742 1.505 1.652 0 .909-.669 1.646-1.505 1.646zm4.64 0c-.828 0-1.505-.737-1.505-1.646 0-.909.669-1.652 1.505-1.652.836 0 1.51.742 1.505 1.652 0 .909-.669 1.646-1.505 1.646z"/></svg>
      </a>
      <a href={LINKS.twitter} target="_blank" rel="noopener" aria-label="Twitter/X" className="glass p-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M18.244 2H21l-6.543 7.472L22 22h-6.93l-4.519-5.736L5.3 22H3l7-8.001L2 2h6.93l4.094 5.196L18.244 2zm-1.214 18h1.214L8.97 4H7.756l9.274 16z"/></svg>
      </a>
      <a href={LINKS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="glass p-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.9c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z"/></svg>
      </a>
    </div>
  );
}
