import { useEffect } from 'react';
import { siteConfig } from '../config/site';

/**
 * Loads GA4 when `VITE_GA_MEASUREMENT_ID` is set (e.g. G-XXXXXXXX).
 */
export function Analytics() {
  useEffect(() => {
    const id = siteConfig.gaMeasurementId.trim();
    if (!id || typeof document === 'undefined') return;
    if (!/^G-[A-Z0-9]+$/i.test(id)) return;

    const existing = document.querySelector(`script[data-ga="${id}"]`);
    if (existing) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.ga = id;
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.dataset.gaInit = id;
    const safeId = JSON.stringify(id);
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${safeId});
    `;
    document.head.appendChild(inline);
  }, []);

  return null;
}
