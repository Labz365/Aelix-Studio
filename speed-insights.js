/**
 * Vercel Speed Insights Integration
 * 
 * This script initializes Vercel Speed Insights for tracking
 * web performance metrics across the Aelix Studios website.
 */

import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2.0.0/dist/index.mjs';

// Initialize Speed Insights
// This will automatically track Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
injectSpeedInsights({
  debug: false, // Set to true for development debugging
});
