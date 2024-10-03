'use client'

import { useEffect, useState } from 'react'

type TransitionState = 'initial' | 'in-transition' | 'complete'

type UseTransitionReturn = {
	state: TransitionState
	value: number
	start: () => void
	done: () => void
	reset: () => void
}

export default function useTransition({}: {}): UseTransitionReturn {
	const [state, setState] = useState<TransitionState>('initial')
	const [value, setValue] = useState<number>(0)
	const [delay, setDelay] = useState<number>(0)

	const start = (newDelay?: number) => {
		setState('in-transition')
		setDelay(newDelay || 0)
	}

	useEffect(() => {
		let t: NodeJS.Timeout | null = null
		if (state === 'in-transition') {
			const totalSteps = 100
			const stepDuration = delay / totalSteps

			t = setInterval(() => {
				setValue(prevValue => {
					if (prevValue >= 99) {
						return 99
					} else {
						return prevValue + 1
					}
				})
			}, stepDuration)
		} else if (state === 'complete') {
			setValue(100)
			if (t) clearInterval(t)
		}

		return () => {
			if (t) clearInterval(t)
		}
	}, [state, delay])

	const done = () => {
		setState('complete')
	}

	const reset = () => {
		setValue(0)
		setState('initial')
		setDelay(0)
	}

	useEffect(() => {
		let t: NodeJS.Timeout | undefined
		if (value === 100) {
			t = setTimeout(() => {
				reset()
			}, 300)
		}

		return () => {
			if (t) clearTimeout(t)
		}
	}, [value])

	return {
		state,
		value,
		start,
		done,
		reset
	}
}
