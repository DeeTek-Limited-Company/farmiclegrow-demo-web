'use client';

import { useEffect } from 'react';

export function HydrationCleanup() {
  useEffect(() => {
    try {
      const nodes = document.querySelectorAll('[data-trae-ref]');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeAttribute('data-trae-ref');
      }
    } catch (e) {}
  }, []);

  return null;
}
