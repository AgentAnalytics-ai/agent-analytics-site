'use client';

import { useCallback } from 'react';

export function useCalendly() {
  const openCalendly = useCallback((url: string) => {
    console.log('Opening Calendly:', url);
    
    // Try Calendly popup first
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      try {
        (window as any).Calendly.initPopupWidget({ url });
        console.log('Calendly popup opened');
        return;
      } catch (error) {
        console.error('Calendly popup failed:', error);
      }
    }
    
    // Fallback: open in new tab
    console.log('Opening direct link as fallback');
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return { openCalendly };
}
