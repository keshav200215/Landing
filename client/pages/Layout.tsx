import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, Menu, X } from "lucide-react";

const GOOGLE_FORM_ID =
  "1FAIpQLSe8fWDhGi3fwY0N6sadmU9JBIv8YNYwOANFLHM2E9lbuxKXbw";

const LINKS = {
  discord:
    (import.meta as any).env?.VITE_DISCORD_INVITE || "https://discord.com/invite",
  twitter:
    (import.meta as any).env?.VITE_TWITTER_URL || "https://twitter.com",
  linkedin:
    (import.meta as any).env?.VITE_LINKEDIN_URL || "https://www.linkedin.com",
};

import { Outlet } from "react-router-dom";

export default function Layout() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Features", href: "/#features" },
      { label: "How it Works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
    [],
  );

  return (
    <div className="min-h-screen flex flex-col">
      {bannerOpen && (
        <div className="sticky top-0 z-50">
          <div className="w-full bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20">
            <div className="container flex items-center justify-between py-2 text-sm text-white/80">
              <p className="flex items-center gap-2">
                We’re inviting early traders now — limited slots.
              </p>
              <div className="flex items-center gap-3">
                <BetaTrigger>
                  <Button size="sm" variant="neon">
                    Request Access
                    <ChevronRight className="ml-1" />
                  </Button>
                </BetaTrigger>
                <button
                  aria-label="Dismiss"
                  className="p-2 rounded-xl hover:bg-white/10"
                  onClick={() => setBannerOpen(false)}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl brand-gradient" />
            <span className="font-extrabold text-lg tracking-tight brand-text">
              PromptFi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <BetaTrigger>
              <Button variant="neon">Join the Beta</Button>
            </BetaTrigger>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-background/90 backdrop-blur-xl">
            <div className="container py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="py-2 text-white/80 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {n.label}
                </a>
              ))}
              <BetaTrigger>
                <Button className="w-full" variant="neon">
                  Join the Beta
                </Button>
              </BetaTrigger>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="border-t border-white/10 mt-20">
        <div className="container py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl brand-gradient" />
              <span className="font-extrabold tracking-tight brand-text">PromptFi</span>
            </div>
            <p className="text-white/60 max-w-sm">
              Build, backtest, and deploy crypto strategies in plain English. No code needed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-white/80 font-medium">Product</div>
              <ul className="space-y-2 text-white/60">
                <li><a href="#features" className="hover:text-white">Build</a></li>
                <li><a href="#how-it-works" className="hover:text-white">Invest</a></li>
                <li><a href="#faq" className="hover:text-white">Docs</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-white/80 font-medium">Legal</div>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-white/80 font-medium">Follow</div>
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
            <p className="text-white/60">Get updates, drops, and beta invites.</p>
          </div>
        </div>
        <div className="container pb-8 text-xs text-white/50">
          <p className="mb-2">© {new Date().getFullYear()} PromptFi</p>
          <p>
            Trading involves risk, including the possible loss of principal. The
            information provided is for illustrative purposes only and does not
            constitute investment advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

function BetaTrigger({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
  );
}
