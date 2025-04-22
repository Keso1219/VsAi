export interface Category {
  slug: string;
  name: string;
  description: string;
  iconUrl: string;
  featured?: boolean;
  toolCount: number; // Added toolCount property
}

export const categories: Category[] = [
  {
    slug: 'presentation',
    name: 'Presentation',
    description: 'AI-powered tools for creating stunning presentations and slide decks.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/presentation.png',
    featured: true,
    toolCount: 3, // Example tool count
  },
  {
    slug: 'website',
    name: 'Website',
    description: 'Build professional websites quickly with AI assistance.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/web.png',
    featured: true,
    toolCount: 3, // Example tool count
  },
  {
    slug: 'writing',
    name: 'Writing',
    description: 'AI tools for content creation, copywriting, and creative writing.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/pen.png',
    featured: true,
    toolCount: 3, // Example tool count
  },
  {
    slug: 'ai-model',
    name: 'AI Model',
    description: 'No-code platforms for training and deploying custom AI models.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/artificial-intelligence.png',
    featured: true,
    toolCount: 3, // Example tool count
  },
  {
    slug: 'meeting-productivity',
    name: 'Meeting Productivity',
    description: 'AI tools for transcription, note-taking, and meeting summaries.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/meeting.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'chatbot',
    name: 'Chatbot',
    description: 'Build and deploy AI chatbots for various platforms.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/chat.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'automation',
    name: 'Automation',
    description: 'Automate workflows and tasks with AI assistance.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/process.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'ui-ux',
    name: 'UI/UX',
    description: 'AI-powered tools for design and prototyping.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/design.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'image-generation',
    name: 'Image Generation',
    description: 'Create stunning images and artwork with AI.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/image.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'video',
    name: 'Video',
    description: 'AI tools for video creation and editing.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/video.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'design',
    name: 'Design',
    description: 'AI-powered tools for graphic design and visual content.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/design.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    description: 'AI tools for digital marketing and advertising.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/marketing.png',
    toolCount: 3, // Example tool count
  },
  {
    slug: 'social-media',
    name: 'Social Media',
    description: 'AI tools for social media management and content creation.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/social-media.png',
    toolCount: 3, // Example tool count
  },
];
