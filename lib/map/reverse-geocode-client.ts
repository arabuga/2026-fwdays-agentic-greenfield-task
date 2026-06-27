import type { CityLocation } from "@/lib/city-search/geocoding";
import {
  buildReverseGeocodingUrl,
  normalizeReverseGeocodingResponse,
} from "./reverse-geocode";

export async function reverseGeocodeCoordinates(
  latitude: number,
  longitude: number,
): Promise<CityLocation> {
  const response = await fetch(buildReverseGeocodingUrl(latitude, longitude).toString());

  if (!response.ok) {
    throw new Error("reverse-geocode-failed");
  }

  const payload = await response.json();
  return normalizeReverseGeocodingResponse(latitude, longitude, payload);
}
