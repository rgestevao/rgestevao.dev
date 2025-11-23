import React from 'react'
import { Experience } from '../types'
import { IconArrowUpRight } from './Icons'

interface ExperienceItemProps extends Experience {
	labelPresent: string
	labelAt: string
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
	year,
	isPresent,
	role,
	company,
	companyUrl,
	labelPresent,
	labelAt,
}) => {
	return (
		<div className="flex flex-col sm:flex-row mb-6 sm:items-baseline group">
			<div className="w-[150px] flex-shrink-0 flex items-center gap-3 opacity-90 font-sora font-normal text-[16px] text-[#202020] dark:text-[#F0F0F0]">
				<span>{year}</span>
				{isPresent && (
					<span className="font-sora font-semibold text-[10px] leading-[13px] uppercase tracking-wider text-[#202020] dark:text-[#F0F0F0]">
						{labelPresent}
					</span>
				)}
			</div>
			<div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
				<span className="font-sora font-semibold text-[16px] leading-[20px] text-[#202020] dark:text-[#F0F0F0]">
					{role}
				</span>
				<span className="hidden sm:inline text-[#202020] dark:text-[#F0F0F0]">
					{labelAt}
				</span>
				<a
					href={companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="font-sora font-normal text-[16px] leading-[20px] flex items-center gap-1 hover:underline text-[#0088FF] dark:text-[#69B6FA]"
				>
					{company}
					<IconArrowUpRight />
				</a>
			</div>
		</div>
	)
}
