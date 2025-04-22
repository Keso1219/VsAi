import React from 'react';
import { Search, Filter } from 'lucide-react';
import { categories } from '../data/categories';
import { PricingType } from '../data/tools';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  pricingFilter: PricingType | '';
  setPricingFilter: (pricing: PricingType | '') => void;
  showCategoryFilter?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  pricingFilter,
  setPricingFilter,
  showCategoryFilter = true,
}) => {
  return (
    <div className="bg-dark-card p-4 rounded-lg shadow-card mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools..."
            className="block w-full bg-dark-bg border border-gray-800 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {showCategoryFilter && (
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="block w-full bg-dark-bg border border-gray-800 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
                aria-label="Filter by category"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Filter className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          )}

          <div className="relative">
            <select
              value={pricingFilter}
              onChange={(e) => setPricingFilter(e.target.value)}
              className="block w-full bg-dark-bg border border-gray-800 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
            >
              <option value="">All Pricing</option>
              <option value="Free">Free</option>
              <option value="Freemium">Freemium</option>
              <option value="Paid">Paid</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Filter className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;