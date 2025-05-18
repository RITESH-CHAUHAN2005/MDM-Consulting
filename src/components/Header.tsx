
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  // Improved navigation function to handle both internal and external navigation
  const handleNavigation = (id) => {
    // Close mobile menu first
    setMobileMenuOpen(false);
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // Internal navigation
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External navigation
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-mdm-blue' : 'text-white'}`}>
            MDM <span className="text-mdm-coral">Consulting</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavigation(item.toLowerCase())}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-mdm-charcoal hover:text-mdm-blue' : 'text-white hover:text-mdm-coral'
              }`}
            >
              {item}
            </button>
          ))}
          <Button className="btn-primary" onClick={handleGetStarted}>Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke={isScrolled ? 'currentColor' : 'white'} 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavigation(item.toLowerCase())}
                className="text-mdm-charcoal hover:text-mdm-blue font-medium py-2 text-left"
              >
                {item}
              </button>
            ))}
            <Button className="btn-primary self-start mt-3" onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
