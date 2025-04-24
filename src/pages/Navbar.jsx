import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';

const Navbar = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Background styles for different slides
  // const slideBackgrounds = [
  //   'transparent',
  //   'rgba(0, 0, 0, 0.9)',
  //   'rgba(255, 255, 255, 0.97)',
  //   'rgba(25, 25, 112, 0.9)'
  // ];

  // Determine text color based on background
  const textColor = activeIndex === 2 ? '#000000' : '#ffffff';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && activeIndex === 0) {
        document.querySelector('.navbar').style.background = '#ffffff';
      } else {
        document.querySelector('.navbar').style.background = slideBackgrounds[activeIndex];
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);

  return (
    <nav className="fixed z-50 w-full transition-all duration-500 navbar">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Logo className="h-8" color={textColor} />
          
          <div className="flex items-center gap-4">
            <button 
              className="px-6 py-2 transition-all border rounded-full"
              style={{
                color: textColor,
                borderColor: textColor
              }}
            >
              Sign In
            </button>
            
            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-opacity hover:opacity-75 "
              style={{ color: textColor }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute left-0 w-full bg-white shadow-xl top-full">
            <div className="container px-6 py-4 mx-auto">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
  <a 
    key={item} 
    href="#" 
    onClick={(e) => {
      e.preventDefault(); // prevent page jump
      setIsMenuOpen(false); // close menu
    }}
    className="block py-3 text-xl text-gray-800 transition-colors hover:bg-gray-50"
  >
    {item}
  </a>
))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Logo = ({ color, className }) => (
  <svg className={className} style={{ fill: color }} viewBox="0 0 100 100">
    <path d="M50 0L100 50L50 100L0 50L50 0Z" />
  </svg>
);

export default Navbar;                                         