import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/lab/", "/interaction-lab/"] }, sitemap: canonicalUrl("/sitemap.xml") };
}
