"use client";

import Script from "next/script";
import { createElement, useState } from "react";

export default function TalkingAvatar() {
  const [viewerReady, setViewerReady] = useState(false);

  return (
    <div className="avatar-stage" aria-label="Animated 3D model of Adrian talking">
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
        onLoad={() => setViewerReady(true)}
        onReady={() => setViewerReady(true)}
      />
      {viewerReady ? (
        createElement("model-viewer", {
          className: "avatar-model",
          src: "/models/adrian.glb",
          "camera-controls": true,
          "auto-rotate": true,
          "auto-rotate-delay": "0",
          "rotation-per-second": "10deg",
          "camera-orbit": "0deg 76deg 2.7m",
          "min-camera-orbit": "auto 65deg 2m",
          "max-camera-orbit": "auto 90deg 4m",
          "shadow-intensity": "0.7",
          exposure: "1",
          "interaction-prompt": "none",
          ar: false,
        })
      ) : (
        <div className="avatar-loading">Loading Adrian</div>
      )}
    </div>
  );
}
