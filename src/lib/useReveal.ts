"use client";

import { useEffect, useRef, useState } from "react";

type RevealElement = HTMLElement;

type RevealSubscription = {
  setVisible: () => void;
  optionsKey: string;
};

const subscriptions = new WeakMap<RevealElement, RevealSubscription>();
const observers = new Map<string, IntersectionObserver>();

function createOptionsKey(options?: IntersectionObserverInit) {
  return JSON.stringify({
    rootMargin: options?.rootMargin ?? "0px",
    threshold: options?.threshold ?? 0.12,
  });
}

function getObserver(optionsKey: string, options?: IntersectionObserverInit) {
  const existingObserver = observers.get(optionsKey);
  if (existingObserver) return existingObserver;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const element = entry.target as RevealElement;
        const subscription = subscriptions.get(element);
        if (!subscription) continue;

        subscription.setVisible();
        observer.unobserve(element);
        subscriptions.delete(element);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px", ...options }
  );

  observers.set(optionsKey, observer);
  return observer;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const optionsKey = createOptionsKey(options);
    const observer = getObserver(optionsKey, options);

    subscriptions.set(element, {
      optionsKey,
      setVisible: () => setIsVisible(true),
    });
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      subscriptions.delete(element);
    };
  }, [isVisible, options]);

  return { ref, isVisible };
}
