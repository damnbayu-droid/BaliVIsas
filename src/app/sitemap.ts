import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balivisa.agency';

  const routes = [
    '',
    '/site-map',
    '/bali-visa-2026-2027-guide',
    '/bali-visa-on-arrival-extension',
    '/bali-digital-nomad-visa-guide',
    '/bali-business-visa-requirements',
    '/visa-indonesia',
    '/visa-bali',
    '/visa-jakarta',
    '/visa-lombok',
    '/visa-surabaya',
    '/visa-jogja',
    '/visa/bali-visa-sponsorship-guide',
    '/visa/c1-tourist-visa',
    '/visa/d1-multiple-entry-tourist',
    '/visa/d12-pre-investment-visa',
    '/visa/d2-multiple-entry-business',
    '/visa/e28a-investment-kitas-bali',
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
