import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { Tool, PricingType } from '../data/tools';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [copied, setCopied] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Handle copy failure
    }
  };

  const togglePrompts = () => {
    setShowPrompts(!showPrompts);
    setSelectedPrompt(null);
  };

  const getPricingColor = (pricing: PricingType) => {
    switch (pricing) {
      case 'Free':
        return 'bg-success';
      case 'Freemium':
        return 'bg-warning';
      case 'Paid':
        return 'bg-error';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="bg-dark-card rounded-lg shadow-card overflow-hidden animate-fade-in">
      <div className="p-6">
        <div className="flex items-start">
          <img 
            src={tool.logoUrl} 
            alt={`${tool.name} logo`} 
            className="w-16 h-16 mr-4 rounded-md object-contain bg-gray-900 p-1"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white mb-1">{tool.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full text-white ${getPricingColor(tool.pricing)}`}>
                {tool.pricing}
              </span>
            </div>
            <p className="text-secondary mb-4">{tool.shortDesc}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={togglePrompts}
                className="flex items-center text-sm px-3 py-1.5 rounded-md bg-dark-bg hover:bg-gray-800 transition-colors text-white"
              >
                <Copy className="w-4 h-4 mr-1.5" />
                {showPrompts ? 'Hide Prompts' : 'Show Prompts'}
              </button>
              
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm px-3 py-1.5 rounded-md bg-primary hover:bg-primary-hover transition-colors text-white"
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Visit Tool
              </a>
            </div>
          </div>
        </div>
        
        {showPrompts && (
          <div className="mt-4 pt-4 border-t border-gray-800 animate-slide-up">
            <div className="space-y-4">
              {Object.entries(tool.prompts).map(([key, prompt], index) => (
                <div key={key} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="text-sm font-medium text-white">Example Prompt {index + 1}</h4>
                    <button
                      onClick={() => copyToClipboard(prompt)}
                      className="text-primary hover:text-primary-hover flex items-center text-xs"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-dark-bg p-3 rounded-md text-secondary-light text-sm">
                    {prompt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;