'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import useTransitionBar from './use-transition-bar'

export type DelayedRouter = {
	push: (href: string) => Promise<void>
}

export default function useDelayedRouter(delay: number = 2000): DelayedRouter {
	const router = useRouter()
	const { start, done } = useTransitionBar()

	const push = useCallback(
		async (href: string) => {
			start()
			await new Promise(resolve => setTimeout(resolve, delay))
			await router.push(href)
			done()
		},
		[router, delay, start, done]
	)

	return { push }
}
