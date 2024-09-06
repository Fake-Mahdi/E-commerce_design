import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Smoothly scroll to the top of the page whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return null; // This component does not render anything
};

export default ScrollToTop;

