/** */
'use client'
export function initGA() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", 'G-TEMZC9BP9L');
}
