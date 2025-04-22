import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

interface HeroSectionProps {
  toolCount?: number;  // Made optional
  categoryCount?: number;  // Made optional
}

/**
 * Hero section component that displays the main landing area
 * with tool and category counts, and navigation links
 * @param {Object} props - Component props
 * @param {number} [props.toolCount=60] - Number of AI tools
 * @param {number} [props.categoryCount=8] - Number of categories
 */
const HeroSection: React.FC<HeroSectionProps> = ({ 
  toolCount = 60,  // Added default value
  categoryCount = 8  // Added default value
}) => {
  if (toolCount < 0 || categoryCount < 0) {  // Added validation
    throw new Error('Tool count and category count must be non-negative numbers');
  }

  return (
    <div className="py-16 md:py-24 text-center" data-testid="hero-section">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Find the perfect AI tool <span className="text-primary">in seconds</span>
      </h1>
      <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-10">
        Discover and compare the best AI tools for your specific needs. 
        From content creation to coding assistance, we've curated the most effective tools available.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Link
          to="/categories"
          aria-label="Browse AI tool categories"  // Added accessibility
          data-testid="categories-link"
          className="flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <span className="mr-2">Browse Categories</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          to="/tools"
          aria-label="View all AI tools"  // Added accessibility
          data-testid="tools-link"
          className="flex items-center justify-center bg-dark-card hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <span className="mr-2">All Tools</span>
          <Search className="w-5 h-5" />
        </Link>
      </div>

      <div className="text-sm text-secondary">
        <p>Curated collection of {toolCount}+ AI tools across {categoryCount} categories</p>
      </div>
    </div>
  );
};

class HeroSectionErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('HeroSection Error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-16">Error: Invalid tool or category count</div>;
    }
    return this.props.children;
  }
}

export default function HeroSectionWithErrorBoundary(props: HeroSectionProps) {
  return (
    <HeroSectionErrorBoundary>
      <HeroSection {...props} />
    </HeroSectionErrorBoundary>
  );
}