
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const { toast } = useToast();
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Fixed type error by properly typing the event parameter and using form element
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value) {
      toast({
        title: "Newsletter Subscription",
        description: "Thank you for subscribing to our newsletter!"
      });
      emailInput.value = '';
    }
  };
  
  return (
    <footer className="bg-mdm-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">MDM Consulting</h3>
            <p className="text-gray-300 mb-6">
              Empowering businesses through strategic digital solutions that drive growth and engagement. 
              We specialize in creating tailored strategies for businesses of all sizes, helping them 
              navigate the digital landscape with confidence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com"
                className="bg-white/10 hover:bg-white/20 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                aria-label="facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://www.twitter.com"
                className="bg-white/10 hover:bg-white/20 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                aria-label="twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com"
                className="bg-white/10 hover:bg-white/20 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                aria-label="linkedin"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://www.instagram.com"
                className="bg-white/10 hover:bg-white/20 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                aria-label="instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', id: 'about', content: 'Learn about our company values, mission, and the skilled team behind our successful projects.' },
                { name: 'Services', id: 'services', content: 'Discover our comprehensive range of digital marketing and business consulting services.' },
                { name: 'Portfolio', id: 'portfolio', content: 'Browse through our portfolio of successful projects across various industries.' },
                { name: 'Testimonials', id: 'testimonials', content: 'Read what our clients say about working with us and the results we have delivered.' },
                { name: 'Contact', id: 'contact', content: 'Get in touch with our team for inquiries, quotes, or to discuss your next project.' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    <span className="font-medium">{item.name}</span>
                    <p className="text-xs text-gray-400 mt-1">{item.content}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news, industry insights, and special offers delivered directly to your inbox.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none bg-white/10 border border-white/20 text-white"
                required
              />
              <button
                type="submit"
                className="bg-mdm-coral hover:bg-opacity-90 px-4 rounded-r-md transition-colors"
              >
                <span className="sr-only">Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MDM Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
