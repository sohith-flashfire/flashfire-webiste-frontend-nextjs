export const getCurrentUTMParams = (): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const utmSource = localStorage.getItem("utm_source");
  const utmMedium = localStorage.getItem("utm_medium");
  const utmCampaign = localStorage.getItem("utm_campaign");
  const utmContent = localStorage.getItem("utm_content");
  const utmTerm = localStorage.getItem("utm_term");

  const params = new URLSearchParams();

  if (utmSource) params.set("utm_source", utmSource);
  if (utmMedium) params.set("utm_medium", utmMedium);
  if (utmCampaign) params.set("utm_campaign", utmCampaign);
  if (utmContent) params.set("utm_content", utmContent);
  if (utmTerm) params.set("utm_term", utmTerm);

  return params.toString();
};

export const navigateWithUTM = (
  path: string,
  navigate: (path: string) => void,
) => {
  const utmParams = getCurrentUTMParams();
  const finalPath = utmParams ? `${path}?${utmParams}` : path;
  navigate(finalPath);
};

export const createLinkWithUTM = (path: string): string => {
  const utmParams = getCurrentUTMParams();
  return utmParams ? `${path}?${utmParams}` : path;
};

export const hasUTMParams = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  return !!(
    localStorage.getItem("utm_source") || localStorage.getItem("utm_medium")
  );
};

export const getUTMSource = (): string => {
  if (typeof window === "undefined") {
    return "direct";
  }
  return localStorage.getItem("utm_source") || "direct";
};

export const getUTMMedium = (): string => {
  if (typeof window === "undefined") {
    return "website";
  }
  return localStorage.getItem("utm_medium") || "website"; 
};

export const logUTMParams = (): void => {
  if (typeof window === "undefined") {
    return;
  }
  console.log("utm_source:", localStorage.getItem("utm_source"));
  console.log("utm_medium:", localStorage.getItem("utm_medium"));
  console.log("utm_campaign:", localStorage.getItem("utm_campaign"));
  console.log("utm_content:", localStorage.getItem("utm_content"));
  console.log("utm_term:", localStorage.getItem("utm_term"));
  console.log("ref-code:", localStorage.getItem("ref-code"));
};

