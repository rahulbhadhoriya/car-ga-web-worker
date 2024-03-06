/** */
"use client";

export function initGA() {
  const scriptTag = window.document.createElement("script");
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-TEMZC9BP9L";
  document.body.appendChild(scriptTag);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", "G-TEMZC9BP9L");
}
