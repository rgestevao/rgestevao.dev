import React from 'react';
import { Project } from '../types';
import { IconArrowUpRight } from './Icons';

interface ProjectCardProps extends Project {
  labelLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, language, linkUrl, labelLink }) => {
  return (
    <div className="rounded-[8px] p-6 h-[214px] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300
      bg-[rgba(254,254,254,0.19)] dark:bg-[rgba(54,51,51,0.19)]">
      <div>
        <h4 className="font-sora font-semibold text-[16px] leading-[20px] mb-4 text-[#202020] dark:text-[#F0F0F0]">
          {name}
        </h4>
        <p className="font-sora font-normal text-[14px] leading-[18px] opacity-90 mb-4 text-[#202020] dark:text-[#F0F0F0] line-clamp-3">
          {description}
        </p>
        <p className="font-sora font-normal text-[14px] leading-[18px] opacity-80 text-[#202020] dark:text-[#F0F0F0]">
          {language}
        </p>
      </div>
      <a 
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer" 
        className="font-sora font-normal text-[16px] leading-[20px] flex items-center gap-1 hover:underline w-fit text-[#0088FF] dark:text-[#69B6FA]"
      >
        {labelLink}
        <IconArrowUpRight />
      </a>
    </div>
  );
};