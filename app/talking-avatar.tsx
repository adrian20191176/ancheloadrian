"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const MODEL_SRC = "/models/adrian.glb";
const VIEWER_SRC =
  "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";

export default function TalkingAvatar() {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const finish = () => {
      setProgress(1);
      setLoaded(true);
    };

    // A cached model can finish loading before this effect runs.
    if ((viewer as { loaded?: boolean }).loaded) {
      finish();
      return;
    }

    const onProgress = (event: Event) => {
      const detail = (event as CustomEvent<{ totalProgress?: number }>).detail;
      setProgress(detail?.totalProgress ?? 0);
    };

    viewer.addEventListener("progress", onProgress);
    viewer.addEventListener("load", finish);
    return () => {
      viewer.removeEventListener("progress", onProgress);
      viewer.removeEventListener("load", finish);
    };
  }, [viewerReady]);

  // model-viewer reads these as attributes, where presence alone means "on",
  // so they are left out entirely rather than set to false.
  const spinProps = reduceMotion
    ? {}
    : {
        "auto-rotate": true,
        "auto-rotate-delay": "0",
        "rotation-per-second": "10deg",
      };

  return (
    <div className="avatar-stage">
      <Script
        src={VIEWER_SRC}
        type="module"
        strategy="afterInteractive"
        onLoad={() => setViewerReady(true)}
        onReady={() => setViewerReady(true)}
        onError={() => setFailed(true)}
      />

      {viewerReady && (
        <model-viewer
          ref={viewerRef}
          className="avatar-model"
          src={MODEL_SRC}
          alt="3D portrait of Adrian, rotating slowly"
          camera-controls
          camera-orbit="0deg 76deg 2.7m"
          min-camera-orbit="auto 65deg 2m"
          max-camera-orbit="auto 90deg 4m"
          shadow-intensity="0.55"
          exposure="1"
          interaction-prompt="none"
          // A vertical swipe scrolls the page instead of orbiting the model.
          touch-action="pan-y"
          // The wheel keeps scrolling the page rather than dollying the camera.
          disable-zoom
          {...spinProps}
        />
      )}

      {!loaded && (
        <p className="avatar-status" role="status">
          {failed ? (
            "The 3D portrait did not load, but the WhatsApp button still works."
          ) : (
            <>
              <span>Loading Adrian</span>
              <span className="avatar-progress" aria-hidden="true">
                <span
                  className="avatar-progress-bar"
                  style={{ transform: `scaleX(${progress})` }}
                />
              </span>
            </>
          )}
        </p>
      )}

      {loaded && (
        <p className="avatar-hint" aria-hidden="true">
          Drag to rotate
        </p>
      )}
    </div>
  );
}
