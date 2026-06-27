"use client";

import { useState } from "react";
import { CitySearch } from "@/components/city-search/city-search";
import { ForecastPanel } from "@/components/forecast/forecast-panel";
import type { CityLocation } from "@/lib/city-search/geocoding";
import { shellContent } from "@/lib/shell/shell-content";

export function WeatherExplorer() {
  const [selectedLocation, setSelectedLocation] = useState<CityLocation | null>(null);

  return (
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

          <CitySearch
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          />

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

      <ForecastPanel key={selectedLocation?.id ?? "empty"} location={selectedLocation} />

      <section className="min-h-44 rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_rgba(26,35,50,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#1a2332]/80 md:col-span-1 xl:col-span-1">
        <div className="mb-5 h-2 w-20 rounded-full bg-[#3b6fd9]/25 dark:bg-[#6b9fff]/25" />
        <h2 className="text-xl font-semibold text-[#1a2332] dark:text-[#e8edf4]">
          {shellContent.mapPanelTitle}
        </h2>
        <p className="mt-3 leading-7 text-[#5c6b7a] dark:text-[#8b9bb0]">
          {shellContent.mapPanelText}
        </p>
      </section>
    </main>
  );
}
