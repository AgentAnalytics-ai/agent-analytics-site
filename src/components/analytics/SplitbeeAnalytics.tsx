'use client';

import Script from 'next/script';

export function SplitbeeAnalytics() {
  return (
    <Script
      src="https://cdn.splitbee.io/sb.js"
      strategy="afterInteractive"
    />
  );
} 