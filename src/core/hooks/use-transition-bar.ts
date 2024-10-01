'use client'

import { TransitionBarContext } from '@/components/transition-bar'
import { useContext } from 'react'

type UseTransitionBarReturn = {
	state: 'initial' | 'in-transition' | 'complete'
	value: number
	start: () => void
	done: () => void
	reset: () => void
}

export default function useTransitionBar(): UseTransitionBarReturn {
	const progress = useContext(TransitionBarContext)

	if (progress === null) {
		throw new Error(
			'useTransitionBar must be used within the TransitionBarProvider'
		)
	}

	return progress
}
