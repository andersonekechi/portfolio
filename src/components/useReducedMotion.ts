'use client';

import { useSyncExternalStore } from 'react';

function getSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function subscribe(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export function useMobile() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia('(max-width: 768px)');
      mq.addEventListener('change', cb);
      return () => mq.removeEventListener('change', cb);
    },
    () => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia('(max-width: 768px)').matches;
    },
    () => false
  );
}