import React, { createContext, useContext, useState, useEffect } from 'react';

const FrameSizeContext = createContext({ width: 0, height: 0 });

export const useFrameSize = () => useContext(FrameSizeContext);

export const FrameSizeProvider = ({ children }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth - 40, // Subtract the border width
        height: window.innerHeight - 40 // Subtract the border width
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initialize the size

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <FrameSizeContext.Provider value={size}>
      {children}
    </FrameSizeContext.Provider>
  );
};
