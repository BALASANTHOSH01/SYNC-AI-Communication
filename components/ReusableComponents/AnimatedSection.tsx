import React from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const ref = useIntersectionObserver(className);

  return (
    <div ref={ref} className={`${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
