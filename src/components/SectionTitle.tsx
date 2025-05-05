import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-gray-200' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 mt-4 ${center ? 'mx-auto' : ''} bg-accent-400 rounded`}></div>
    </div>
  );
};

export default SectionTitle;