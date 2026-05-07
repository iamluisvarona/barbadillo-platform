import { useEffect, useRef } from "react";
import L from "leaflet";
import { Button } from "@barbadillo/ui";

import type {
  BrowserLocation,
  BrowserLocationStatus,
} from "../../hooks/useBrowserLocation";

import "leaflet/dist/leaflet.css";
import "./LiveGpsMap.css";

interface LiveGpsMapProps {
  status: BrowserLocationStatus;
  location: BrowserLocation | null;
  accuracyLabel: string | null;
  updatedAtLabel: string | null;
  error?: string | null;
  onStop: () => void;
}

const DEFAULT_CENTER: [number, number] = [40.61042, -3.71129];

function createCurrentLocationIcon() {
  return L.divIcon({
    className: "live-gps-map__marker",
    html: "<span></span>",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

export function LiveGpsMap({
  status,
  location,
  accuracyLabel,
  updatedAtLabel,
  error,
  onStop,
}: LiveGpsMapProps) {
  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const isActive = status === "active";

  useEffect(() => {
    if (!mapNodeRef.current || mapRef.current) return;

    const map = L.map(mapNodeRef.current, {
      center: DEFAULT_CENTER,
      zoom: 13,
      zoomControl: true,
      attributionControl: false,
      preferCanvas: true,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    const invalidate = () => {
      map.invalidateSize(false);
    };

    invalidate();

    const timeouts = [
      window.setTimeout(invalidate, 100),
      window.setTimeout(invalidate, 300),
      window.setTimeout(invalidate, 800),
      window.setTimeout(invalidate, 1500),
    ];

    const resizeObserver = new ResizeObserver(invalidate);
    resizeObserver.observe(mapNodeRef.current);

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      resizeObserver.disconnect();

      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !location) return;

    const position: [number, number] = [location.lat, location.lng];

    map.invalidateSize(false);
    map.setView(position, 15, {
      animate: true,
    });

    if (!markerRef.current) {
      markerRef.current = L.marker(position, {
        icon: createCurrentLocationIcon(),
      }).addTo(map);
    } else {
      markerRef.current.setLatLng(position);
    }

    markerRef.current.bindPopup(`
      <strong>Mi ubicación</strong><br />
      ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}
      ${accuracyLabel ? `<br />Precisión ${accuracyLabel}` : ""}
    `);
  }, [location, accuracyLabel]);

  return (
    <div className="live-gps-map">
      <div ref={mapNodeRef} className="live-gps-map__leaflet" />

      {location && (
        <div className="live-gps-map__hud">
          <div className="live-gps-map__hud-top">
            <span
              className={[
                "live-gps-map__status-dot",
                `live-gps-map__status-dot--${status}`,
              ].join(" ")}
            />

            <strong>Mi ubicación activa</strong>
          </div>

          <div className="live-gps-map__coords">
            {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
          </div>

          {(accuracyLabel || updatedAtLabel) && (
            <div className="live-gps-map__meta">
              {accuracyLabel && <span>{accuracyLabel}</span>}
              {updatedAtLabel && <span>Actualizado {updatedAtLabel}</span>}
            </div>
          )}

          {error && <div className="live-gps-map__error">{error}</div>}

          {isActive && (
            <div className="live-gps-map__actions">
              <Button variant="secondary" fullWidth onClick={onStop}>
                Detener GPS
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
