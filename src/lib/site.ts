const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

/**
 * Local development remains usable without deployment configuration. Production
 * must set NEXT_PUBLIC_SITE_URL to its canonical, HTTPS origin.
 */
export const siteUrl = new URL(configuredUrl ?? "http://localhost:3000");

export function canonicalUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
