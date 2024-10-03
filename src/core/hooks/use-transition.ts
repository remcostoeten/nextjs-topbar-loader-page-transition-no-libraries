'use client'

import { useCallback, useEffect, useState } from 'react'

type TransitionState = 'initial' | 'in-transition' | 'complete'

type UseTransitionReturn = {
	state: TransitionState
	value: number
	start: () => void
	done: () => void
	reset: () => void
}

export default function useTransition(): UseTransitionReturn {
	const [state, setState] = useState<TransitionState>('initial')
	const [value, setValue] = useState<number>(0)

	const start = useCallback(() => {
		setState('in-transition')
		setValue(0)
	}, [])

	const done = useCallback(() => {
		setState('complete')
		setValue(100)
	}, [])

	const reset = useCallback(() => {
		setValue(0)
		setState('initial')
	}, [])

	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null
		if (state === 'in-transition') {
			intervalId = setInterval(() => {
				setValue(prevValue => {
					if (prevValue >= 95) {
						return 95
					} else if (prevValue >= 80) {
						return prevValue + 0.5
					} else if (prevValue >= 60) {
						return prevValue + 2
					} else {
						return prevValue + 5
					}
				})
			}, 100)
		} else if (state === 'complete') {
			if (intervalId) clearInterval(intervalId)
		}

		return () => {
			if (intervalId) clearInterval(intervalId)
		}
	}, [state])

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | undefined
		if (state === 'complete') {
			timeoutId = setTimeout(() => {
				reset()
			}, 300)
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [state, reset])

	return {
		state,
		value,
		start,
		done,
		reset
	}
}
