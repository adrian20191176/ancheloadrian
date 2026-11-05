"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { DoodleArrowIcon } from "./icons";
import { cx } from "./ui";

const MODEL_SRC = "/models/adrian.glb";
const VIEWER_SRC =
  "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";

export default function TalkingAvatar({ className }: { className?: string }) {
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
        "rotation-per-second": "12deg",
      };

  return (
    <div className={cx("relative grid place-items-center", className)}>
      <Script
        src={VIEWER_SRC}
        type="module"
        // Module scripts are fetched in CORS mode; without this the preload
        // Next.js adds is thrown away and the file downloads twice.
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => setViewerReady(true)}
        onReady={() => setViewerReady(true)}
        onError={() => setFailed(true)}
      />

      {viewerReady && (
        <model-viewer
          ref={viewerRef}
          className="size-full bg-transparent motion-safe:animate-float"
          src={MODEL_SRC}
          alt="3D portrait of Adrian, rotating slowly"
          camera-controls
          camera-orbit="0deg 76deg 2.7m"
          min-camera-orbit="auto 65deg 2m"
          max-camera-orbit="auto 90deg 4m"
          shadow-intensity="0.6"
          exposure="1.05"
          interaction-prompt="none"
          // A vertical swipe scrolls the page instead of orbiting the model.
          touch-action="pan-y"
          // The wheel keeps scrolling the page rather than dollying the camera.
          disable-zoom
          {...spinProps}
        />
      )}

      {!loaded && (
        <p
          className="pointer-events-none absolute inset-0 grid content-center justify-items-center gap-3 px-5 text-center font-mono text-xs tracking-[0.14em] text-umber uppercase"
          role="status"
        >
          {failed ? (
            <span className="max-w-xs leading-relaxed normal-case tracking-normal">
              The 3D portrait did not load, but the WhatsApp button still works.
            </span>
          ) : (
            <>
              <span>Loading Adrian</span>
              <span
                className="block h-1 w-48 max-w-[70%] overflow-hidden rounded-full bg-ink/15"
                aria-hidden="true"
              >
                <span
                  className="block h-full w-full origin-left rounded-full bg-ink transition-transform duration-300"
                  style={{ transform: `scaleX(${progress})` }}
                />
              </span>
            </>
          )}
        </p>
      )}

      {loaded && (
        <p
          aria-hidden="true"
          className="pointer-events-none absolute top-[6%] right-0 flex rotate-6 items-start gap-1 font-hand text-2xl leading-none text-ink sm:text-[1.7rem] lg:top-[16%]"
        >
          <DoodleArrowIcon className="mt-4 w-14 -scale-x-100 -rotate-12" />
          <span>
            that’s me!
            <br />
            <span className="text-umber">give me a spin</span>
          </span>
        </p>
      )}
    </div>
  );
}
