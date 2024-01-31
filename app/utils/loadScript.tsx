// utils/loadScript.ts
export const loadScript = (src: string, callback: () => void): void => {
  console.log("Loading script:", src);
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
};
