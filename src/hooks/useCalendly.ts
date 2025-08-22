'use client';

import { useEffect, useState, useCallback } from 'react';

export function useCalendly() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly is already loaded
    if ((window as any).Calendly) {
      setIsCalendlyLoaded(true);
      return;
    }

    // Wait for Calendly to load with timeout
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max

    const checkCalendly = () => {
      attempts++;
      
      if ((window as any).Calendly) {
        setIsCalendlyLoaded(true);
        console.log('Calendly loaded successfully');
      } else if (attempts < maxAttempts) {
        setTimeout(checkCalendly, 100);
      } else {
        console.error('Calendly failed to load after 5 seconds');
      }
    };

    checkCalendly();
  }, []);

  const openCalendly = useCallback((url: string) => {
    console.log('Attempting to open Calendly:', url);
    
    if ((window as any).Calendly) {
      try {
        (window as any).Calendly.initPopupWidget({
          url,
        });
        console.log('Calendly popup opened successfully');
      } catch (error) {
        console.error('Calendly popup error:', error);
        // Fallback to direct link
        window.open(url, '_blank');
      }
    } else {
      console.log('Calendly not loaded, opening direct link');
      // Fallback: open in new tab
      window.open(url, '_blank');
    }
  }, []);

  return { isCalendlyLoaded, openCalendly };
}
