import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.balivisa.agency';

  const routes = [
    '',
    '/site-map',
    '/visa-indonesia',
    '/visa-bali',
    '/visa-jakarta',
    '/visa-lombok',
    '/visa-surabaya',
    '/visa-jogja',
    '/education/b211a',
    '/education/study-kitas',
    '/education/cultural-visa',
    '/education/research-visa',
    '/education/internship-visa',
    '/immigration/kitas-requirements',
    '/immigration/overstay-rules',
    '/immigration/deportation-process',
    '/immigration/dual-citizenship',
    '/immigration/permanent-residency',
    '/glossary/kitas-meaning',
    '/glossary/sktt-guide',
    '/glossary/stm-report',
    '/glossary/e-visa-system',
    '/glossary/telex-visa',
    '/faq',
    '/about',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('visa-') ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }));
}
