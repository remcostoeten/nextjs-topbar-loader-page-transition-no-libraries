import ThemeWrapper from '@/components/ThemeWrapper'
import { geistMono, geistSans } from '@/core/config/fonts/fonts'
import '@/styles/globals.css'
import Header from './_demo/components/Header/Header'

export { metadata } from '@/core/config/home.metadata'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="bg-[#10100f]">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#10100f]`}
			>
				<ThemeWrapper>
					<Header />
					<ThemeWrapper>{children}</ThemeWrapper>
				</ThemeWrapper>
			</body>
		</html>
	)
}
