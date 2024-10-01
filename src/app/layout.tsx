import ThemeWrapper from '@/components/ThemeWrapper'
import { geistMono, geistSans } from '@/core/config/fonts/fonts'
import { metadata } from '@/core/config/home.metadata'
import '@/styles/globals.css'
export { metadata } from '@/core/config/home.metadata'

{
	metadata
}

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
				<ThemeWrapper>{children}</ThemeWrapper>
			</body>
		</html>
	)
}
