import {
  normalizeGeocodingResponse,
  type CityLocation,
  type OpenMeteoGeocodingResponse,
} from "@/lib/city-search/geocoding";

const REVERSE_GEOCODING_ENDPOINT = "https://geocoding-api.open-meteo.com/v1/reverse";
const DEFAULT_LANGUAGE = "uk";

export function buildReverseGeocodingUrl(
  latitude: number,
  longitude: number,
  options: { language?: string } = {},
): URL {
  const url = new URL(REVERSE_GEOCODING_ENDPOINT);
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));
  url.searchParams.set("count", "1");
  url.searchParams.set("language", options.language ?? DEFAULT_LANGUAGE);
  url.searchParams.set("format", "json");
  return url;
}

export function locationFromCoordinates(
  latitude: number,
  longitude: number,
): CityLocation {
  const label = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

  return {
    id: syntheticLocationId(latitude, longitude),
    name: label,
    latitude,
    longitude,
    countryCode: null,
    country: null,
    region: null,
    timezone: null,
    population: null,
    label,
    flag: null,
  };
}

export function normalizeReverseGeocodingResponse(
  latitude: number,
  longitude: number,
  response: OpenMeteoGeocodingResponse,
): CityLocation {
  const [location] = normalizeGeocodingResponse(response);

  if (!location) {
    return locationFromCoordinates(latitude, longitude);
  }

  return {
    ...location,
    latitude,
    longitude,
  };
}

function syntheticLocationId(latitude: number, longitude: number): number {
  const latPart = Math.round(latitude * 10_000);
  const lonPart = Math.round(longitude * 10_000);
  return Math.abs(latPart * 1_000_003 + lonPart);
}
