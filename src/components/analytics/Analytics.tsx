'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

// Initialize PostHog
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
    capture_pageview: false, // We'll handle this manually
  });
}

export function Analytics() {
  useEffect(() => {
    // Capture pageview
    posthog.capture('$pageview');
  }, []);

  return null;
}

// Export PostHog instance for use in other components
export { posthog }; 