import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './styles/globals.css'

const sora = Sora({
	variable: '--font-sora',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: '@rgestevao',
	description: 'A web portfolio for Rodrigo Gouveia Estevão',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${sora.variable}`}>
			<body className="font-sora">{children}</body>
		</html>
	)
}
