"use client";

import { useSyncExternalStore } from "react";
import { profile } from "../_lib/content";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: profile.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

// One shared ticker, however many clocks are on the page.
let snapshot: string | null = null;
let timer: number | undefined;
const listeners = new Set<() => void>();

function tick() {
  snapshot = formatter.format(new Date());
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    tick();
    timer = window.setInterval(tick, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.clearInterval(timer);
  };
}

const getSnapshot = () => snapshot;
// The server can't know the visitor's "now", so it renders a placeholder.
const getServerSnapshot = () => null;

/** Adrian's current local time, ticking every second. */
export default function LocalTime({ className }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span className={className}>{time ?? "--:--:-- --"}</span>;
}
