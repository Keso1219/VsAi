import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, ExternalLink, Share2 } from 'lucide-react';
import { tools } from '../data/tools';
import { categories } from '../data/categories';
import Toast from '../components/Toast';
import Chat from '../components/Chat';

const ToolDetailPage: React.FC = () => {
  const { toolSlug } = useParams<{ toolSlug: string }>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  
  const tool = tools.find(t => t.slug === toolSlug);
  
  if (!tool) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-secondary mb-8">The tool you're looking for doesn't exist.</p>
        <Link
          to="/tools"
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Tools
        </Link>
      </div>
    );
  }
  
  const category = categories.find(c => c.slug === tool.categorySlug);
  
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${type} prompt copied to clipboard!`);
    setShowToast(true);
  };
  
  const closeToast = () => {
    setShowToast(false);
  };

  const shareUrl = window.location.href;
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${tool?.name} - VsAi Tool`,
          text: tool?.shortDesc,
          url: shareUrl
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      await copyToClipboard(shareUrl, 'URL');
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <Link
          to={`/categories/${tool.categorySlug}`}
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {category?.name || 'Category'} Tools
        </Link>
      </div>
      
      <div className="bg-dark-card rounded-lg shadow-card overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-dark-bg rounded-xl p-2 flex items-center justify-center">
              <img 
                src={tool.logoUrl} 
                alt={`${tool.name} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                <span className={`text-sm px-3 py-1 rounded-full text-white inline-flex items-center justify-center ${
                  tool.pricing === 'Free' ? 'bg-success' :
                  tool.pricing === 'Freemium' ? 'bg-warning' : 'bg-error'
                }`}>
                  {tool.pricing}
                </span>
              </div>
              
              <p className="text-secondary text-lg mb-6">{tool.shortDesc}</p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </a>
                
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center bg-dark-bg hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Tool
                </button>
                
                <Link
                  to={`/categories/${tool.categorySlug}`}
                  className="flex items-center justify-center bg-dark-bg hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  View Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-dark-card rounded-lg shadow-card overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Prompts</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">General Prompt</h3>
                <button
                  onClick={() => copyToClipboard(tool.promptGeneral, 'General')}
                  className="flex items-center text-primary hover:text-primary-hover transition-colors"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Prompt
                </button>
              </div>
              <div className="bg-dark-bg p-4 rounded-lg text-secondary-light">
                {tool.promptGeneral}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">Niche Prompt</h3>
                <button
                  onClick={() => copyToClipboard(tool.promptNiche, 'Niche')}
                  className="flex items-center text-primary hover:text-primary-hover transition-colors"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Prompt
                </button>
              </div>
              <div className="bg-dark-bg p-4 rounded-lg text-secondary-light">
                {tool.promptNiche}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-dark-card rounded-lg shadow-card overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">AI Assistant</h2>
          <Chat toolName={tool.name} />
        </div>
      </div>
      
      <Toast
        message={toastMessage}
        visible={showToast}
        onClose={closeToast}
        type="success"
      />
    </div>
  );
};

export default ToolDetailPage;