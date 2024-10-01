import { metadata } from '@/core/config/home.metadata'
import Header from '../_demo/components/Header/Header'
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
		<>
			<Header />
			{children}
		</>
	)
}
