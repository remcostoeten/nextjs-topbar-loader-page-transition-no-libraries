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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
