import Link from "next/link";
import { shellContent } from "@/lib/shell/shell-content";

const placeholderCards = [
  {
    title: shellContent.forecastPanelTitle,
    text: shellContent.forecastPanelText,
    className: "md:col-span-1 xl:col-span-1",
  },
  {
    title: shellContent.mapPanelTitle,
    text: shellContent.mapPanelText,
    className: "md:col-span-1 xl:col-span-1",
  },
] as const;

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
        <div
          className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-sm text-[#5c6b7a] shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#1a2332]/80 dark:text-[#8b9bb0]"
          aria-label="Поточний стан теми"
        >
          {shellContent.themeIndicator}
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl gap-6 px-5 pb-10 pt-4 sm:px-8 md:grid-cols-2 xl:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.35fr)_minmax(18rem,1fr)]">
        <section className="md:col-span-2 xl:col-span-1" aria-labelledby="shell-hero-title">
          <div className="flex h-full flex-col items-center gap-6 rounded-[2rem] border border-white/70 bg-white/80 px-6 py-12 text-center shadow-[0_24px_80px_rgba(26,35,50,0.10)] backdrop-blur dark:border-white/10 dark:bg-[#1a2332]/90 sm:px-10 xl:items-start xl:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#3b6fd9] dark:text-[#6b9fff]">
              {shellContent.eyebrow}
            </p>
            <div className="space-y-4">
              <h1
                id="shell-hero-title"
                className="text-balance text-4xl font-semibold tracking-tight text-[#1a2332] dark:text-[#e8edf4] sm:text-5xl"
              >
                {shellContent.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#5c6b7a] dark:text-[#8b9bb0]">
                {shellContent.heroSubtitle}
              </p>
            </div>

            <div
              role="search"
              className="w-full max-w-xl rounded-3xl border border-[#d8e3f0] bg-[#f4f7fb] p-3 text-left shadow-inner dark:border-white/10 dark:bg-[#0f1419]"
              aria-label={shellContent.searchLabel}
            >
              <label
                className="mb-2 block px-2 text-sm font-medium text-[#1a2332] dark:text-[#e8edf4]"
                htmlFor="city-search-placeholder"
              >
                {shellContent.searchLabel}
              </label>
              <input
                id="city-search-placeholder"
                type="search"
                readOnly
                placeholder={shellContent.searchPlaceholder}
                aria-describedby="city-search-hint"
                className="h-12 w-full rounded-2xl border border-transparent bg-white px-4 text-base text-[#1a2332] outline-none ring-[#3b6fd9] transition placeholder:text-[#5c6b7a]/70 focus:border-[#3b6fd9] focus:ring-2 dark:bg-[#1a2332] dark:text-[#e8edf4] dark:placeholder:text-[#8b9bb0]"
              />
              <p
                id="city-search-hint"
                className="mt-3 px-2 text-sm leading-6 text-[#5c6b7a] dark:text-[#8b9bb0]"
              >
                {shellContent.searchHint}
              </p>
            </div>

            <p className="text-sm text-[#5c6b7a] dark:text-[#8b9bb0]">
              {shellContent.geolocationPolicy}
            </p>

            <aside className="mt-auto rounded-3xl border border-[#d8e3f0] bg-white/60 p-5 text-left dark:border-white/10 dark:bg-[#0f1419]/55">
              <h2 className="text-lg font-semibold text-[#1a2332] dark:text-[#e8edf4]">
                {shellContent.sidePanelTitle}
              </h2>
              <p className="mt-2 leading-7 text-[#5c6b7a] dark:text-[#8b9bb0]">
                {shellContent.sidePanelText}
              </p>
            </aside>
          </div>
        </section>

        {placeholderCards.map((card) => (
          <section
            key={card.title}
            className={`min-h-44 rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_rgba(26,35,50,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#1a2332]/80 ${card.className}`}
          >
            <div className="mb-5 h-2 w-20 rounded-full bg-[#3b6fd9]/25 dark:bg-[#6b9fff]/25" />
            <h2 className="text-xl font-semibold text-[#1a2332] dark:text-[#e8edf4]">
              {card.title}
            </h2>
            <p className="mt-3 leading-7 text-[#5c6b7a] dark:text-[#8b9bb0]">
              {card.text}
            </p>
          </section>
        ))}
      </main>

      <footer className="mx-auto w-full max-w-7xl px-5 pb-8 text-sm text-[#5c6b7a] sm:px-8 dark:text-[#8b9bb0]">
        <p>
          {shellContent.footerText}
        </p>
      </footer>
    </div>
  );
}
