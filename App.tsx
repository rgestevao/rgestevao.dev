import React, { useEffect, useState } from 'react'
import { EducationItem } from './components/EducationItem'
import { ExperienceItem } from './components/ExperienceItem'
import {
	IconArrowUpRight,
	IconCopy,
	IconLang,
	IconMoon,
	IconSun,
} from './components/Icons'
import { ProjectCard } from './components/ProjectCard'
import { SectionTitle } from './components/SectionTitle'
import { CONTENT } from './constants'
import { Project } from './types'

const App: React.FC = () => {
	// Initialize theme based on localStorage or system preference
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme')
			if (savedTheme) {
				return savedTheme === 'dark'
			}
			if (window.matchMedia) {
				return window.matchMedia('(prefers-color-scheme: dark)').matches
			}
		}
		return false
	})

	// Initialize language based on localStorage or browser setting
	const [lang, setLang] = useState<'en' | 'pt'>(() => {
		if (typeof window !== 'undefined') {
			const savedLang = localStorage.getItem('lang')
			if (savedLang === 'en' || savedLang === 'pt') {
				return savedLang
			}
			if (navigator.language) {
				return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
			}
		}
		return 'en'
	})

	const [projects, setProjects] = useState<Project[]>([])
	const [showCopyFeedback, setShowCopyFeedback] = useState(false)

	const toggleTheme = () => setIsDark(!isDark)
	const toggleLang = () => setLang((prev) => (prev === 'en' ? 'pt' : 'en'))

	// Persist theme selection
	useEffect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	}, [isDark])

	// Persist language selection
	useEffect(() => {
		localStorage.setItem('lang', lang)
	}, [lang])

	// Update Favicon based on theme
	useEffect(() => {
		const faviconLink = document.getElementById(
			'dynamic-favicon'
		) as HTMLLinkElement
		if (faviconLink) {
			// SVG configuration
			// Rotation logic: 180deg (Top->Bottom) rotated 90deg CW becomes (Right->Left)
			// We simulate this with linearGradient x1="1" y1="0" x2="0" y2="0"

			let svgContent = ''

			if (isDark) {
				// Dark Theme Gradient: #1E1E21 -> #0B071A -> #110535
				svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 148 148">
            <defs>
              <linearGradient id="gradDark" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stop-color="#1E1E21"/>
                <stop offset="61.54%" stop-color="#0B071A"/>
                <stop offset="99.99%" stop-color="#110535"/>
              </linearGradient>
            </defs>
            <circle cx="74" cy="74" r="74" fill="url(#gradDark)" />
          </svg>
        `
			} else {
				// Light Theme Gradient: #F4E8E7 -> #F4EFC6
				svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 148 148">
            <defs>
              <linearGradient id="gradLight" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stop-color="#F4E8E7"/>
                <stop offset="100%" stop-color="#F4EFC6"/>
              </linearGradient>
            </defs>
            <circle cx="74" cy="74" r="74" fill="url(#gradLight)" />
          </svg>
        `
			}

			const encodedSvg = encodeURIComponent(
				svgContent.trim().replace(/\s+/g, ' ')
			)
			faviconLink.href = `data:image/svg+xml,${encodedSvg}`
		}
	}, [isDark])

	const data = CONTENT[lang]

	useEffect(() => {
		fetch(
			'https://api.github.com/users/rgestevao/repos?sort=updated&direction=desc'
		)
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data)) {
					const formattedProjects: Project[] = data.map((repo: any) => ({
						name: repo.name,
						description:
							repo.description ||
							(lang === 'pt' ? 'Sem descrição' : 'No description'),
						language: repo.language || '',
						linkUrl: repo.html_url,
					}))
					// Take top 6 most recently updated
					setProjects(formattedProjects.slice(0, 6))
				}
			})
			.catch((error) => console.error('Error fetching projects:', error))
	}, [lang])

	const handleCopyEmail = () => {
		navigator.clipboard.writeText('rgestevao@gmail.com')
		setShowCopyFeedback(true)
		setTimeout(() => setShowCopyFeedback(false), 2000)
	}

	return (
		<div className={isDark ? 'dark' : ''}>
			<div
				className={`min-h-screen w-full transition-colors duration-500
        bg-[linear-gradient(180deg,#F4E8E7_0%,#F4EFC6_100%)]
        dark:bg-[linear-gradient(180deg,#1E1E21_0%,#0B071A_61.54%,#110535_99.99%)]`}
			>
				<div className="w-full relative overflow-x-hidden p-6 md:p-12 lg:px-20 lg:py-24 max-w-[1440px] mx-auto">
					{/* Header Section */}
					<header className="mb-24 lg:mb-32">
						<h1 className="font-sora font-extrabold text-[24px] leading-[30px] mb-2 text-[#202020] dark:text-[#F0F0F0]">
							Rodrigo Gouveia Estevão
						</h1>
						<h2 className="font-sora font-semibold text-[16px] leading-[20px] mb-6 text-[#202020] dark:text-[#F0F0F0]">
							{data.role}
						</h2>

						<div className="flex flex-col gap-3">
							<div
								onClick={toggleTheme}
								className="flex items-center gap-3 cursor-pointer w-fit opacity-90 hover:opacity-100 transition-opacity text-[#202020] dark:text-[#F0F0F0]"
							>
								{isDark ? <IconMoon /> : <IconSun />}
								<span className="font-sora font-normal text-[14px]">
									{isDark ? data.themeDark : data.themeLight}
								</span>
							</div>
							<div
								onClick={toggleLang}
								className="flex items-center gap-3 cursor-pointer w-fit opacity-90 hover:opacity-100 transition-opacity text-[#202020] dark:text-[#F0F0F0]"
							>
								<IconLang />
								<span className="font-sora font-normal text-[14px]">
									{data.languageName}
								</span>
							</div>
						</div>
					</header>

					{/* Main Content Grid (Experience & Education) */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-24">
						{/* Experience Column */}
						<section>
							<SectionTitle title={data.sectionExperiences} />
							<div className="flex flex-col gap-2">
								{data.experiences.map((exp, index) => (
									<ExperienceItem
										key={index}
										{...exp}
										labelPresent={data.labelPresent}
										labelAt={data.labelAt}
									/>
								))}
							</div>
						</section>

						{/* Education Column */}
						<section>
							<SectionTitle title={data.sectionEducation} />
							<div className="flex flex-col gap-4">
								{data.education.map((edu, index) => (
									<EducationItem key={index} {...edu} />
								))}
							</div>
						</section>
					</div>

					{/* Projects Section */}
					<section className="mb-32">
						<SectionTitle title={data.sectionProjects} />
						{projects.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{projects.map((project, index) => (
									<ProjectCard
										key={index}
										{...project}
										labelLink={data.labelLink}
									/>
								))}
							</div>
						) : (
							<div className="text-[#202020] dark:text-[#F0F0F0] opacity-80 font-sora">
								Loading projects...
							</div>
						)}
					</section>

					{/* Footer */}
					<footer className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8">
						<div className="flex items-center gap-8">
							<a
								href="https://github.com/rgestevao"
								target="_blank"
								rel="noopener noreferrer"
								className="font-sora text-[16px] flex items-center gap-1 hover:underline text-[#0088FF] dark:text-[#69B6FA]"
							>
								{data.labelGithub}
								<IconArrowUpRight className="transform rotate-0" />
							</a>
							<a
								href="https://linkedin.com/in/rgestevao"
								target="_blank"
								rel="noopener noreferrer"
								className="font-sora text-[16px] flex items-center gap-1 hover:underline text-[#0088FF] dark:text-[#69B6FA]"
							>
								{data.labelLinkedin}
								<IconArrowUpRight className="transform rotate-0" />
							</a>
						</div>

						<div className="relative">
							<div
								onClick={handleCopyEmail}
								className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer text-[#202020] dark:text-[#F0F0F0]"
								title="Copy email"
							>
								<IconCopy />
								<span className="font-sora text-[16px]">
									rgestevao@gmail.com
								</span>
							</div>

							{showCopyFeedback && (
								<div className="absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1 bg-[#202020] dark:bg-[#F0F0F0] text-[#F0F0F0] dark:text-[#202020] text-sm rounded shadow-lg font-sora whitespace-nowrap animate-pulse">
									{data.labelEmailCopied}
									<div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#202020] dark:border-t-[#F0F0F0]"></div>
								</div>
							)}
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default App
