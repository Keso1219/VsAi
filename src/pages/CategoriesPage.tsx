import React, { useState } from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import { Search } from 'lucide-react';

const CategoriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const totalTools = categories.reduce((sum, cat) => sum + cat.toolCount, 0);
  const featuredCount = categories.filter(cat => cat.featured).length;

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Explore All AI Categories</h1>
        <p className="text-secondary mb-6">Find the perfect tools for your specific needs</p>
        
        {/* Add Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{categories.length}</div>
            <div className="text-sm text-secondary">Total Categories</div>
          </div>
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{totalTools}</div>
            <div className="text-sm text-secondary">Available Tools</div>
          </div>
          <div className="bg-dark-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{featuredCount}</div>
            <div className="text-sm text-secondary">Featured Categories</div>
          </div>
        </div>
      </div>
      
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search categories..."
          className="block w-full bg-dark-card border border-gray-800 rounded-md py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      
      {filteredCategories.length === 0 ? (
        <div className="text-center py-12 bg-dark-card rounded-lg">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-2">No categories found</h3>
            <p className="text-secondary mb-4">Try adjusting your search terms to find what you're looking for.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary hover:text-primary-hover transition-colors"
            >
              Clear search
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredCategories.map(category => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;