import type { HTMLAttributes, Ref } from "react";

/** The <model-viewer> attributes this app uses. */
type ModelViewerAttributes = HTMLAttributes<HTMLElement> & {
  ref?: Ref<HTMLElement>;
  src?: string;
  alt?: string;
  exposure?: string;
  "camera-controls"?: boolean;
  "camera-orbit"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "shadow-intensity"?: string;
  "interaction-prompt"?: string;
  "touch-action"?: string;
  "disable-zoom"?: boolean;
  "auto-rotate"?: boolean;
  "auto-rotate-delay"?: string;
  "rotation-per-second"?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}
