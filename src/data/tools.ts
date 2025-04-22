export type PricingType = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  slug: string;
  name: string;
  categorySlug: string;
  pricing: PricingType;
  shortDesc: string;
  prompts: Record<string, string>;
  website: string;
  logoUrl: string;
  promptGeneral: string;
  promptNiche: string;
}

export const tools: Tool[] = [
  {
    slug: 'beautiful-ai',
    name: 'Beautiful.ai',
    categorySlug: 'presentation',
    pricing: 'Paid',
    shortDesc: 'AI slide designer for quick, polished decks',
    prompts: {
      prompt1: 'Create a 10-slide pitch deck for a meal delivery startup covering problem, solution, market, and financials.',
      prompt2: 'Design a marketing slide deck with clean visuals and minimal text, highlighting product features.',
      prompt3: 'Create a professional investor pitch deck, with sections for company overview, market opportunity, and business model.',
    },
    website: 'https://www.beautiful.ai',
    logoUrl: 'https://www.beautiful.ai/favicon.ico',
    promptGeneral: 'Create a presentation for a business idea.',
    promptNiche: 'Create a pitch deck for a meal delivery startup.',
  },
  {
    slug: 'plus-ai',
    name: 'Plus AI',
    categorySlug: 'presentation',
    pricing: 'Freemium',
    shortDesc: 'Add-on that turns docs/outlines into slides or PPT',
    prompts: {
      prompt1: 'Generate an 8-slide presentation from my 2-page Word doc about remote-work benefits.',
      prompt2: 'Create a 5-slide deck from my 1-page business plan about the rise of AI in healthcare.',
      prompt3: 'Transform my product launch plan into a presentation with impactful visual slides.',
    },
    website: 'https://www.plusdocs.com',
    logoUrl: 'https://www.plusdocs.com/favicon.ico',
    promptGeneral: 'Create a presentation from a document.',
    promptNiche: 'Generate a presentation about remote-work benefits.',
  },
  {
    slug: 'tome',
    name: 'Tome',
    categorySlug: 'presentation',
    pricing: 'Freemium',
    shortDesc: 'AI storytelling tool for visual, interactive decks',
    prompts: {
      prompt1: 'Turn my 3-page product brief into a modern 6-card Tome presentation with images.',
      prompt2: 'Create an interactive presentation about the benefits of AI in education, using text and visuals.',
      prompt3: 'Build a visually engaging portfolio presentation showcasing recent case studies with concise content.',
    },
    website: 'https://tome.app',
    logoUrl: 'https://tome.app/favicon.ico',
    promptGeneral: 'Create a visual presentation.',
    promptNiche: 'Create a presentation about the benefits of AI in education.',
  },
  {
    slug: 'wix-adi',
    name: 'Wix ADI',
    categorySlug: 'website',
    pricing: 'Freemium',
    shortDesc: 'Automated design intelligence for building websites easily',
    prompts: {
      prompt1: 'I run a small bakery; create a site with menu and contact form.',
      prompt2: 'Design a personal website for a freelance designer with portfolio and contact sections.',
      prompt3: 'Create a website for my boutique coffee shop, featuring product details, hours, and location.',
    },
    website: 'https://www.wix.com',
    logoUrl: 'https://www.wix.com/favicon.ico',
    promptGeneral: 'Create a website for a small business.',
    promptNiche: 'Create a website for a bakery.',
  },
  {
    slug: 'durable',
    name: 'Durable',
    categorySlug: 'website',
    pricing: 'Freemium',
    shortDesc: '30-second AI website builder for simple business sites',
    prompts: {
      prompt1: 'Make a homepage for my personal trainer business, highlighting services and testimonials.',
      prompt2: 'Create a landing page for a yoga retreat, with a contact form and promotional offer.',
      prompt3: 'Build a simple website for my online resume with sections for work experience and skills.',
    },
    website: 'https://durable.co',
    logoUrl: 'https://durable.co/favicon.ico',
    promptGeneral: 'Create a simple business website.',
    promptNiche: 'Create a homepage for a personal trainer business.',
  },
  {
    slug: 'framer',
    name: 'Framer',
    categorySlug: 'website',
    pricing: 'Freemium',
    shortDesc: 'Design-focused site builder with AI blocks',
    prompts: {
      prompt1: 'Create a sleek landing page for a SaaS product with hero section, pricing, and sign-up button.',
      prompt2: 'Design a professional portfolio website for a graphic designer with clean sections and interactive content.',
      prompt3: 'Create a one-page website for my fitness business, including services, testimonials, and a contact form.',
    },
    website: 'https://www.framer.com',
    logoUrl: 'https://www.framer.com/favicon.ico',
    promptGeneral: 'Create a design-focused website.',
    promptNiche: 'Create a landing page for a SaaS product.',
  },
  // ... Continue with the rest of the tools following the same pattern
];