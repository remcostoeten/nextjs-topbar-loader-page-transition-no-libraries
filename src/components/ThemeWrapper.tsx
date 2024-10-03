'use client'

import TransitionTimer from '@/app/_demo/components/page-transition-timer'
import TransitionBar from './transition-bar'

type PageProps = {
	children: React.ReactNode
}

export default function ThemeWrapper({ children }: PageProps) {
	const isDevelopment = process.env.NODE_ENV === 'development';
	const isMatchingDomain = window.location.hostname.endsWith(process.env.NEXT_PUBLIC_DOMAIN_NAME || '');

	if (isDevelopment || isMatchingDomain) {
		return <TransitionBar>
			<TransitionTimer /> /* only for demo/testing purposes  */
			{children}
		</TransitionBar>
	}
	return children
}
