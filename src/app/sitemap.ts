import { MetadataRoute } from "next";

// Mock blog data (replace with your real data source later)
const blogSlugs = [
  "implanti",
  "karijes",
  "ortodoncija",
  "izbeljivanje"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dentalhousevracar.com";

  // Static pages
  const staticPages = [
    "",
    "/tim-lekara",
    "/nase-usluge",
    "/cenovnik",
    "/kontakt",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Blog pages
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}