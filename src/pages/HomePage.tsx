// src/pages/HomePage.tsx
import React from 'react';
import Chat from '../components/Chat'
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  // Determine featured categories: those marked featured, else first 4
  const featuredCategories = categories.filter(cat => cat.featured).length > 0
    ? categories.filter(cat => cat.featured)
    : categories.slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Chat Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🗨️ Find Your AI Tool</h2>
        <Chat />
      </section>

      {/* Quick Start Guide */}
      <section className="py-12 bg-dark-card my-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Start Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose a Category</h3>
              <p className="text-secondary text-sm">Browse our curated categories to find the type of AI tool you need</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Select a Tool</h3>
              <p className="text-secondary text-sm">Compare tools and find the perfect match for your needs</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Start Creating</h3>
              <p className="text-secondary text-sm">Use our expert prompts to get the best results from your chosen tool</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Categories</h2>
              <p className="text-secondary">Explore our most popular AI tool categories</p>
            </div>
            <Link 
              to="/categories"
              className="inline-flex items-center text-primary hover:text-primary-hover transition-colors mt-4 md:mt-0"
            >
              <span className="mr-2">View All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map(category => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to find your perfect AI tool?</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-10">
            Browse our complete collection of AI tools and discover the perfect solution for your needs.
          </p>
          <Link
            to="/tools"
            className="inline-flex items-center bg-primary hover:bg-primary-hover text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            <span className="mr-2">See All Tools</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
