import { describe, expect, it } from "vitest";
import {
  DEFAULT_MAP_ZOOM,
  getMapCenter,
  getMapSkeletonClassName,
  getMarkerPopupLabel,
  MAP_MIN_HEIGHT_PX,
  OSM_ATTRIBUTION,
  OSM_TILE_URL,
} from "./map-config";
import {
  buildReverseGeocodingUrl,
  locationFromCoordinates,
  normalizeReverseGeocodingResponse,
} from "./reverse-geocode";

const rawKyiv = {
  id: 703448,
  name: "Kyiv",
  latitude: 50.45466,
  longitude: 30.5238,
  country_code: "UA",
  country: "Україна",
  admin1: "Kyiv",
  timezone: "Europe/Kyiv",
  population: 2797553,
};

describe("map helpers", () => {
  // @trace FR-MAP-01
  // @trace FR-MAP-04
  it("exposes OSM tile config and default zoom", () => {
    expect(OSM_TILE_URL).toContain("openstreetmap.org");
    expect(OSM_ATTRIBUTION).toBe("© OpenStreetMap contributors");
    expect(DEFAULT_MAP_ZOOM).toBeGreaterThan(0);
    expect(getMapCenter({ latitude: 50.45, longitude: 30.52 })).toEqual([50.45, 30.52]);
  });

  // @trace FR-MAP-02
  it("uses the city label for marker popup text", () => {
    expect(
      getMarkerPopupLabel({
        name: "Kyiv",
        label: "Kyiv, Kyiv, Україна",
      }),
    ).toBe("Kyiv, Kyiv, Україна");
  });

  // @trace FR-MAP-03
  it("builds reverse geocoding URLs and normalizes click results", () => {
    const url = buildReverseGeocodingUrl(50.45, 30.52);

    expect(url.pathname).toBe("/v1/reverse");
    expect(url.searchParams.get("latitude")).toBe("50.45");
    expect(url.searchParams.get("longitude")).toBe("30.52");
    expect(url.searchParams.get("language")).toBe("uk");

    const location = normalizeReverseGeocodingResponse(50.45466, 30.5238, {
      results: [rawKyiv],
    });

    expect(location.name).toBe("Kyiv");
    expect(location.latitude).toBe(50.45466);
    expect(location.longitude).toBe(30.5238);

    const fallback = locationFromCoordinates(48.1, 24.7);
    expect(fallback.label).toBe("48.10, 24.70");
  });

  // @trace FR-MAP-05
  it("keeps a stable skeleton footprint for SSR placeholder", () => {
    expect(MAP_MIN_HEIGHT_PX).toBe(320);
    expect(getMapSkeletonClassName()).toContain("min-h-[320px]");
  });
});
