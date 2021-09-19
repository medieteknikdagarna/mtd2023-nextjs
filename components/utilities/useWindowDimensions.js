import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width < 750 ? true : false;
  return {
    width,
    height,
    isMobile
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    handleResize()
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}