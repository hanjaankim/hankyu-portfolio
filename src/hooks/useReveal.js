import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to an element and whether it has entered the
 * viewport. Fires once — used to drive a one-time fade/slide-in on scroll.
 */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default useReveal;
