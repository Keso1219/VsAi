import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">About VsAi</h1>
      
      <div className="bg-dark-card rounded-lg shadow-card overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-secondary mb-6">
            VsAi was created to help users navigate the rapidly expanding landscape of artificial intelligence tools. 
            Our mission is to make AI more accessible by providing a curated directory of the best tools available, 
            along with expert prompts that help you get the most out of each platform.
          </p>
          <p className="text-secondary">
            Whether you're a content creator, developer, marketer, or researcher, 
            we aim to help you find the perfect AI tools to enhance your work and creativity.
          </p>
        </div>
      </div>
      
      <div className="bg-dark-card rounded-lg shadow-card overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">How We Select Tools</h2>
          <p className="text-secondary mb-6">
            Every tool in our directory undergoes a thorough evaluation process before being added. 
            We consider factors such as:
          </p>
          <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
            <li>Usefulness and practical applications</li>
            <li>User experience and interface design</li>
            <li>Unique capabilities compared to similar tools</li>
            <li>Reliability and performance</li>
            <li>Value relative to pricing (for paid tools)</li>
          </ul>
          <p className="text-secondary">
            We regularly update our listings to ensure they remain current as AI technology continues to evolve.
          </p>
        </div>
      </div>
      
      <div className="bg-dark-card rounded-lg shadow-card overflow-hidden">
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-secondary mb-6">
            Have a suggestion for a tool we should add? Want to provide feedback about our directory?
            We'd love to hear from you!
          </p>
          <p className="text-secondary">
            Email us at: <a href="mailto:contact@vsai.app" className="text-primary hover:text-primary-hover transition-colors">contact@vsai.app</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;