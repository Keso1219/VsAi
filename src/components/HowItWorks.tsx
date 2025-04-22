import React from 'react';
import { Search, Copy, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: 'Find the Right Tool',
      description: 'Browse our curated categories or search for specific AI tools that match your needs.',
    },
    {
      icon: <Copy className="w-12 h-12 text-primary" />,
      title: 'Copy the Perfect Prompt',
      description: 'Each tool comes with ready-to-use prompts that you can copy with a single click.',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: 'Create Amazing Results',
      description: 'Use the prompts with your chosen AI tool to get high-quality, consistent results every time.',
    },
  ];

  return (
    <section className="py-16 bg-dark-bg border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-6 p-4 bg-dark-card rounded-full shadow-card">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;