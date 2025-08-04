'use client'

import { useEffect } from 'react';

export default function Book() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-20 bg-white dark:bg-gray-950">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule a Strategy Session
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's discuss how AI can transform your business challenges into opportunities.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/grant-agentanalyticsai?background_color=f8fafc&text_color=1e293b&primary_color=059669" 
            style={{minWidth: '320px', height: '700px'}}
          />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Can't find a time that works? <a href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">Contact us directly</a>
          </p>
        </div>
      </div>
    </div>
  );
} 