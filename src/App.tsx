import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AppContent from './AppContent';
import { AuthProvider } from './contexts/AuthContext';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    
    const scrollToTop = () => {
      
      window.scrollTo({ top: 0 });
      // window.scrollTo({ top: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.scrollTop = 0;
      } else {
        console.log('No <main> element found');
      }
      
      const root = document.getElementById('root') || document.body;
      root.scrollTop = 0;
    };

    if (!hash) {
      // Delay scroll to ensure DOM is ready
      const timer = setTimeout(scrollToTop, 50); // Increased to 50ms
      // Debug scroll position
      const checkTimer = setTimeout(() => {
        const mainContent = document.querySelector('main');
        console.log('Current scroll position:', {
          window: window.scrollY,
          documentElement: document.documentElement.scrollTop,
          body: document.body.scrollTop,
          main: mainContent ? mainContent.scrollTop : 'no main',
        });
      }, 100);
      return () => {
        clearTimeout(timer);
        clearTimeout(checkTimer);
      };
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        console.log('Scrolling to element:', hash);
        element.scrollIntoView();
      } else {
        setTimeout(scrollToTop, 50);
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;