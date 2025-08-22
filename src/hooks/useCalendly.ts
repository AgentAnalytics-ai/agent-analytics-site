'use client';

import { useEffect, useState } from 'react';

export function useCalendly() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly is already loaded
    if ((window as any).Calendly) {
      setIsCalendlyLoaded(true);
      return;
    }

    // Wait for Calendly to load
    const checkCalendly = () => {
      if ((window as any).Calendly) {
        setIsCalendlyLoaded(true);
      } else {
        setTimeout(checkCalendly, 100);
      }
    };

    checkCalendly();
  }, []);

  const openCalendly = (url: string) => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url,
      });
    } else {
      // Fallback: open in new tab
      window.open(url, '_blank');
    }
  };

  return { isCalendlyLoaded, openCalendly };
}
