export function getIdFromUrl(url: string): string | null {
  // Create a URL object
  let urlObj = new URL(url);
  // Get the value of the 'id' parameter
  let idValue = urlObj.searchParams.get("id");
  return idValue;
}

export const getG2fUrl = (email: string, secret: string) => {
  const companyName = import.meta.env.VITE_APP_COMPONY_NAME;
  const g2fUrl = `otpauth://totp/${companyName}:${email}?secret=${secret}&issuer=${companyName}`;

  return g2fUrl;
};
