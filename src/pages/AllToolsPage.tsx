import React, { useState } from 'react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import FilterBar from '../components/FilterBar';

const AllToolsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [pricingFilter, setPricingFilter] = useState('');
  
  // Filter tools by search query, category, and pricing
  const filteredTools = tools
    .filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(tool => categoryFilter ? tool.categorySlug === categoryFilter : true)
    .filter(tool => pricingFilter ? tool.pricing === pricingFilter : true);
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All AI Tools</h1>
        <p className="text-secondary">Browse our comprehensive collection of AI tools</p>
        
        {/* Add Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{tools.length}</div>
            <div className="text-sm text-secondary">Total Tools</div>
          </div>
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{new Set(tools.map(t => t.categorySlug)).size}</div>
            <div className="text-sm text-secondary">Categories</div>
          </div>
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{tools.filter(t => t.pricing === 'Free').length}</div>
            <div className="text-sm text-secondary">Free Tools</div>
          </div>
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{tools.filter(t => t.pricing === 'Freemium').length}</div>
            <div className="text-sm text-secondary">Freemium Tools</div>
          </div>
        </div>
      </div>
      
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        pricingFilter={pricingFilter}
        setPricingFilter={setPricingFilter}
      />
      
      {filteredTools.length === 0 ? (
        <div className="text-center py-12 bg-dark-card rounded-lg">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-secondary mb-4">Try adjusting your filters or search terms to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('');
                setPricingFilter('');
              }}
              className="text-primary hover:text-primary-hover transition-colors"
            >
              Clear all filters
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
      
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-secondary text-sm">
        <p>Showing {filteredTools.length} of {tools.length} tools</p>
      </div>
    </div>
  );
};

export default AllToolsPage;