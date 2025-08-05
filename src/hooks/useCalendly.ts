'use client'

import { useEffect } from 'react';

interface CalendlyWindow extends Window {
  Calendly?: {
    initPopupWidget: (options: { url: string }) => void;
  };
}

export function useCalendly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const openCalendlyPopup = () => {
    setTimeout(() => {
      const calendlyWindow = window as CalendlyWindow;
      if (typeof window !== 'undefined' && calendlyWindow.Calendly) {
        calendlyWindow.Calendly.initPopupWidget({
          url: 'https://calendly.com/grant-agentanalyticsai?background_color=f8fafc&text_color=1e293b&primary_color=059669'
        });
      } else {
        // Fallback to redirect
        window.location.href = 'https://calendly.com/grant-agentanalyticsai';
      }
    }, 100);
  };

  return { openCalendlyPopup };
} 