import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link 
      to={`/categories/${category.slug}`}
      className="block bg-dark-card rounded-lg shadow-card overflow-hidden transform transition-all hover:translate-y-[-4px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={`View ${category.toolCount} tools in ${category.name} category`}
    >
      <article className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={imageError ? '/default-icon.png' : category.iconUrl || '/default-icon.png'} 
            alt={`Icon for ${category.name} category`} 
            className={`w-12 h-12 mr-4 object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onError={() => setImageError(true)}
            onLoad={() => setIsLoading(false)}
          />
          <div>
            <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            <span className="text-sm text-secondary" aria-label={`Contains ${category.toolCount} tools`}>
              {category.toolCount} tools
            </span>
          </div>
        </div>
        
        <p className="text-secondary mb-6 line-clamp-3">
          {category.description}
        </p>
        
        <div 
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
        >
          <span className="mr-2">View Tools</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;