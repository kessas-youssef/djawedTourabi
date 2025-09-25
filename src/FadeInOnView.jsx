import { useRef, useEffect, useState } from "react";

export default function FadeInWhenVisible({ before, after, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all overflow-clip duration-5000 ease-out ${
        isVisible ? after : before
      }`}
    >
      {children}
    </div>
  );
}
