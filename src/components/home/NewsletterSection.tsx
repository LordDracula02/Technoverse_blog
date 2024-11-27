'use client';

import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated with Technoverse</h2>
        <p className="text-center mb-8">Subscribe to our newsletter for the latest insights and updates in the tech world.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center">
          By clicking Subscribe, you`s;re confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;