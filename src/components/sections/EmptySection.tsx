import React from 'react';

interface EmptySectionProps {
  className?: string;
}

export const EmptySection: React.FC<EmptySectionProps> = ({ className = '' }) => {
  return (
    <section className={`h-[20vh] ${className}`}>
      {/* Empty space with 20vh height */}
    </section>
  );
};
