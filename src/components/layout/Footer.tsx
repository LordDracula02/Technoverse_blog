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
            <p className="mt-2">Address: Level 1, 12 Sample St, Sydney NSW 2000</p>
            <p>Contact: hello@technoverse.com.au</p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Facebook"><Image src="/facebook-icon.svg" width={24} height={24} alt="Facebook" /></Link>
              <Link href="#" aria-label="Instagram"><Image src="/instagram-icon.svg" width={24} height={24} alt="Instagram" /></Link>
              <Link href="#" aria-label="Twitter"><Image src="/twitter-icon.svg" width={24} height={24} alt="Twitter" /></Link>
              <Link href="#" aria-label="LinkedIn"><Image src="/linkedin-icon.svg" width={24} height={24} alt="LinkedIn" /></Link>
              <Link href="#" aria-label="YouTube"><Image src="/youtube-icon.svg" width={24} height={24} alt="YouTube" /></Link>
            </div>
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
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-sm text-gray-500">
          <p>&copy; 2024 Techverse. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-settings">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;