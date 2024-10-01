'use client'

import useTransitionBar from '@/core/hooks/use-transition-bar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

type TransitionLinkProps = {
	href: string
	children: React.ReactNode
	[key: string]: any
}

const TransitionLink = ({ href, children, ...rest }: TransitionLinkProps) => {
	const router = useRouter()
	const progress = useTransitionBar()

	const navigateToDestination = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		progress.start()

		startTransition(() => {
			router.push(href)
			progress.done()
		})
	}

	return (
		<Link
			className="hover:scale-[1.03] hover:text-zinc-200 hover:text-underline transition-all duration-300"
			href=""
			onClick={navigateToDestination}
			{...rest}
		>
			{children}
		</Link>
	)
}

export default TransitionLink
