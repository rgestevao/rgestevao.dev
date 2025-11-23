import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => {
  return (
    <h3 className={`font-sora font-semibold text-[14px] leading-[18px] underline tracking-wide mb-8 uppercase text-[#202020] dark:text-[#F0F0F0] ${className}`}>
      {title}
    </h3>
  );
};