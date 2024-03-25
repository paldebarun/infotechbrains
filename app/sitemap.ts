import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = 'http://localhost:3000';

    const urls = [
        `${BASE_URL}/about`,
        `${BASE_URL}/contact-us`,
        `${BASE_URL}/hire-ai-experts`,
    ]

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
    ]
}