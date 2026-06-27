"use client";

import { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import type { CityLocation } from "@/lib/city-search/geocoding";
import {
  DEFAULT_MAP_ZOOM,
  getMapCenter,
  getMarkerPopupLabel,
  OSM_ATTRIBUTION,
  OSM_TILE_URL,
} from "@/lib/map/map-config";

type MapViewProps = {
  location: CityLocation;
  onMapClick: (latitude: number, longitude: number) => void;
};

function RecenterMap({ location }: { location: CityLocation }) {
  const map = useMap();

  useEffect(() => {
    map.setView(getMapCenter(location), DEFAULT_MAP_ZOOM);
  }, [location, map]);

  return null;
}

function MapClickHandler({
  onMapClick,
}: {
  onMapClick: (latitude: number, longitude: number) => void;
}) {
  useMapEvents({
    click(event) {
      onMapClick(event.latlng.lat, event.latlng.lng);
    },
  });

  return null;
}

export function MapView({ location, onMapClick }: MapViewProps) {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src,
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });
  }, []);

  return (
    <MapContainer
      center={getMapCenter(location)}
      zoom={DEFAULT_MAP_ZOOM}
      scrollWheelZoom
      className="h-full min-h-[320px] w-full rounded-[1.25rem] z-0"
      aria-label={location.label}
    >
      <TileLayer url={OSM_TILE_URL} attribution={OSM_ATTRIBUTION} />
      <RecenterMap location={location} />
      <MapClickHandler onMapClick={onMapClick} />
      <Marker position={getMapCenter(location)}>
        <Popup>{getMarkerPopupLabel(location)}</Popup>
      </Marker>
    </MapContainer>
  );
}
