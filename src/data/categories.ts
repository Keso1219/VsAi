export interface Category {
  slug: string;
  name: string;
  description: string;
  iconUrl: string;
  featured?: boolean;
  toolCount: number;
}

export const categories: Category[] = [
  {
    slug: 'presentation',
    name: 'Presentation',
    description: 'AI-powered tools for creating stunning presentations and slide decks.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/presentation.png',
    featured: true,
    toolCount: 3,
  },
  {
    slug: 'website',
    name: 'Website',
    description: 'Build professional websites quickly with AI assistance.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/web.png',
    featured: true,
    toolCount: 3,
  },
  {
    slug: 'writing',
    name: 'Writing',
    description: 'AI tools for content creation, copywriting, and creative storytelling.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/pen.png',
    featured: true,
    toolCount: 3,
  },
  {
    slug: 'ai-model',
    name: 'AI Model',
    description: 'No-code platforms for training and deploying custom AI models.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/artificial-intelligence.png',
    featured: true,
    toolCount: 3,
  },
  {
    slug: 'meeting-productivity',
    name: 'Meeting Productivity',
    description: 'AI assistants for transcription, note-taking, noise cancellation & summaries.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/meeting.png',
    toolCount: 3,
  },
  {
    slug: 'chatbot',
    name: 'Chatbot',
    description: 'Build and deploy conversational AI chatbots for web and social platforms.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/chat.png',
    toolCount: 3,
  },
  {
    slug: 'automation',
    name: 'Automation',
    description: 'Automate workflows and repetitive tasks across your apps.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/process.png',
    toolCount: 3,
  },
  {
    slug: 'ui-ux',
    name: 'UI/UX',
    description: 'AI-powered design & prototyping tools for websites and apps.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/design.png',
    toolCount: 3,
  },
  {
    slug: 'image-generation',
    name: 'Image Generation',
    description: 'Create high-quality images and artwork with AI-driven generators.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/image.png',
    toolCount: 4,
  },
  {
    slug: 'video',
    name: 'Video',
    description: 'AI tools for creating, editing, and enhancing video content.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/video.png',
    toolCount: 3,
  },
  {
    slug: 'design',
    name: 'Design',
    description: 'Graphic design, logo creation, and visual content made easy.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/design.png',
    toolCount: 4,
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    description: 'AI tools for ad creative, campaign optimization, and analytics.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/marketing.png',
    toolCount: 3,
  },
  {
    slug: 'social-media',
    name: 'Social Media',
    description: 'Compose, schedule, and grow your social presence with AI.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/social-media.png',
    toolCount: 3,
  },
  {
    slug: 'dev-assistant',
    name: 'Developer Assistant',
    description: 'AI copilots, code interpreters, and inline suggestions for developers.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/source-code.png',
    toolCount: 4,
  },
  {
    slug: 'mental-health',
    name: 'Mental Health',
    description: 'AI companions and coaches for mental wellness and CBT techniques.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/mental-health.png',
    toolCount: 4,
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'AI tutors and study-aid apps for homework, test prep, and learning.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/graduation-cap.png',
    toolCount: 4,
  },
  {
    slug: 'music-creation',
    name: 'Music Creation',
    description: 'Compose tracks, beats, and soundtracks with AI music tools.',
    iconUrl: 'https://img.icons8.com/fluency/48/000000/musical-notes.png',
    toolCount: 4,
  },
];
