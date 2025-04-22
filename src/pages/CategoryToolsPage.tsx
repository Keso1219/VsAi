import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { tools } from '../data/tools';
import { categories } from '../data/categories';
import ToolCard from '../components/ToolCard';
import FilterBar from '../components/FilterBar';

const CategoryToolsPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [pricingFilter, setPricingFilter] = useState('');
  
  const category = categories.find(c => c.slug === categorySlug);
  
  useEffect(() => {
    // Reset filters when category changes
    setSearchQuery('');
    setPricingFilter('');
  }, [categorySlug]);
  
  if (!category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p className="text-secondary mb-8">The category you're looking for doesn't exist.</p>
        <Link
          to="/categories"
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>
      </div>
    );
  }
  
  // Filter tools by category, search query, and pricing
  const filteredTools = tools
    .filter(tool => tool.categorySlug === categorySlug)
    .filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(tool => pricingFilter ? tool.pricing === pricingFilter : true);
  
  return (
    <div>
      <div className="mb-2">
        <Link
          to="/categories"
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Tools for {category.name}</h1>
        <p className="text-secondary">{category.description}</p>
      </div>
      
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter=""
        setCategoryFilter={() => {}}
        pricingFilter={pricingFilter}
        setPricingFilter={setPricingFilter}
        showCategoryFilter={false}
      />
      
      {filteredTools.length === 0 ? (
        <div className="text-center py-12 bg-dark-card rounded-lg">
          <p className="text-xl text-secondary">No tools match your search criteria</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryToolsPage;