import Link from "next/link";
import { TopClock } from "@/components/top-clock/top-clock";
import { WeatherExplorer } from "@/components/weather-explorer/weather-explorer";
import { shellContent } from "@/lib/shell/shell-content";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,111,217,0.22),transparent_32rem),linear-gradient(135deg,#f4f7fb_0%,#e9f1fb_48%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(107,159,255,0.18),transparent_30rem),linear-gradient(135deg,#0f1419_0%,#172033_55%,#10151c_100%)]" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="rounded-full text-lg font-semibold tracking-tight text-[#1a2332] outline-none ring-[#3b6fd9] transition focus-visible:ring-2 focus-visible:ring-offset-2 dark:text-[#e8edf4] dark:ring-offset-[#0f1419]"
          aria-label={`${shellContent.wordmark} головна`}
        >
          {shellContent.wordmark}
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <TopClock />
          <div
            className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-sm text-[#5c6b7a] shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#1a2332]/80 dark:text-[#8b9bb0]"
            aria-label="Поточний стан теми"
          >
            {shellContent.themeIndicator}
          </div>
        </div>
      </header>

      <WeatherExplorer />

      <footer className="mx-auto w-full max-w-7xl px-5 pb-8 text-sm text-[#5c6b7a] sm:px-8 dark:text-[#8b9bb0]">
        <p>
          {shellContent.footerText}
        </p>
      </footer>
    </div>
  );
}
