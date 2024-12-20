import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">Technoverse</Link>
            <p className="mt-2">Address: Virginia, Washington DC</p>
            <p>Contact: tecnoverse24@mail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/consumertech">Consumer Tech</Link></li>
              <li><Link href="/autofocus">Auto Focus</Link></li>
              <li><Link href="/opensource">Open Source</Link></li>
              <li><Link href="/ai-ml">AI & ML</Link></li>
              <li><Link href="/fintech">FinTech Insights</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Tech Reviews</h3>
            <ul className="space-y-2">
              <li><Link href="/latest-news">Latest News</Link></li>
              <li><Link href="/tips-tricks">Tips & Tricks</Link></li>
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-sm text-gray-500">
          <p>&copy; 2024 Techverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;