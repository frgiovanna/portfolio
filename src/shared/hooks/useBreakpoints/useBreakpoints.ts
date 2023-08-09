import { useState, useEffect } from 'react';
import { theme } from '../../theme';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useBreakpoints() {
  const { width } = useWindowDimensions();
  const { breakpoints } = theme;

  return {
    isDesktop: width >= breakpoints.lg.width,
    isSmallDesktop: width >= breakpoints.md.width && width < breakpoints.lg.width,
    isMobile: width < breakpoints.lg.width,
    isTablet: width >= breakpoints.sm.width && width < breakpoints.lg.width,
  };
}
