import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export default (ref, ttl = 100) => {
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    if (!ref.current) return;

    const measure = debounce(() => {
      if (ref.current) {
        setDimensions(ref.current.getBoundingClientRect());
      }
    }, ttl);

    measure();
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
    };
  }, [ref, ttl]);

  return dimensions;
};
