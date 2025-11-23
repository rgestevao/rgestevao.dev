import React from 'react';
import { Education } from '../types';

export const EducationItem: React.FC<Education> = ({ year, course, institution }) => {
  return (
    <div className="flex flex-col sm:flex-row mb-6 sm:items-baseline">
      <div className="w-[150px] flex-shrink-0 font-sora font-normal text-[16px] opacity-90 text-[#202020] dark:text-[#F0F0F0]">
        {year}
      </div>
      <div className="flex flex-col">
        <span className="font-sora font-semibold text-[16px] leading-[20px] text-[#202020] dark:text-[#F0F0F0]">
          {course}
        </span>
        <span className="font-sora font-normal text-[14px] leading-[18px] opacity-80 mt-1 text-[#202020] dark:text-[#F0F0F0]">
          {institution}
        </span>
      </div>
    </div>
  );
};