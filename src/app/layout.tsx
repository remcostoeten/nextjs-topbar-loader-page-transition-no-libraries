import ThemeWrapper from '@/components/ThemeWrapper'
import { geistMono, geistSans } from '@/core/config/fonts/fonts'
import '@/styles/globals.css'
import Header from './_demo/components/Header/Header'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="bg-[#10100f]">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#10100f]`}
			>
				<ThemeWrapper>
					<Header />
					{children}
				</ThemeWrapper>
			</body>
		</html>
	)
}
