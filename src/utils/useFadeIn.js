import { useRef, useState, useEffect } from 'react';

export const useFadeIn = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [domRef]);

  return { domRef, isVisible };
};
