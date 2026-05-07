import { useCallback, useEffect, useRef, useState } from "react";

export type BrowserLocationStatus =
  | "idle"
  | "requesting_permission"
  | "active"
  | "denied"
  | "unavailable"
  | "error";

export interface BrowserLocation {
  lat: number;
  lng: number;
  accuracy?: number;
  heading?: number | null;
  speed?: number | null;
  capturedAt: string;
}

export function useBrowserLocation() {
  const watchIdRef = useRef<number | null>(null);

  const [status, setStatus] = useState<BrowserLocationStatus>("idle");
  const [location, setLocation] = useState<BrowserLocation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isSupported =
    typeof navigator !== "undefined" && "geolocation" in navigator;

  const stop = useCallback(() => {
    if (watchIdRef.current !== null && isSupported) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }

    setStatus("idle");
  }, [isSupported]);

  const start = useCallback(() => {
    if (!isSupported) {
      setStatus("unavailable");
      setError("Este navegador no soporta geolocalización.");
      return;
    }

    setStatus("requesting_permission");
    setError(null);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          heading: position.coords.heading,
          speed: position.coords.speed,
          capturedAt: new Date(position.timestamp).toISOString(),
        });

        setStatus("active");
        setError(null);
      },
      (nextError) => {
        if (nextError.code === nextError.PERMISSION_DENIED) {
          setStatus("denied");
          setError("Permiso de ubicación denegado.");
          return;
        }

        setStatus("error");
        setError(nextError.message || "No se pudo obtener la ubicación.");
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 5000,
      },
    );
  }, [isSupported]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const accuracyLabel =
    location?.accuracy !== undefined
      ? `± ${Math.round(location.accuracy)} m`
      : null;

  const updatedAtLabel = location
    ? new Intl.DateTimeFormat("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date(location.capturedAt))
    : null;

  return {
    status,
    location,
    error,
    isSupported,
    accuracyLabel,
    updatedAtLabel,
    start,
    stop,
  };
}
