'use client'

import useTransitionBar from '@/core/hooks/use-transition-bar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface TransitionLinkProps {
	href: string
	children: React.ReactNode
	className?: string
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children, className }) => {
	const router = useRouter()
	const transition = useTransitionBar()

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		transition.start()

		router.push(href)
	}

	return (
		<Link href={href} onClick={handleClick} className={className}>
			{children}
		</Link>
	)
}

export default TransitionLink
