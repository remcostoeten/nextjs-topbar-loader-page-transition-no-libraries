'use client'

import useDelayedRouter from '@/core/hooks/use-delay-router'
import type { ReactNode } from 'react'
import TransitionLink from './transition-timer'

type DelayedLinkProps = {
	href: string
	children: ReactNode
}

export default function DelayedLink({ href, children }: DelayedLinkProps) {
	const { push } = useDelayedRouter()

	return (
		<TransitionLink
			href={href}
			onClick={e => {
				e.preventDefault()
				push(href)
			}}
		>
			{children}
		</TransitionLink>
	)
}
