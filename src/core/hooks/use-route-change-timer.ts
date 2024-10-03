'use client'

import useTransitionBar from '@/core/hooks/use-transition-bar'
import { useEffect, useRef, useState } from 'react'

export default function useRouteChangeTimer() {
	const { state } = useTransitionBar()
	const [elapsedTime, setElapsedTime] = useState<number>(0)
	const intervalIdRef = useRef<NodeJS.Timeout | null>(null)
	const startTimeRef = useRef<number | null>(null)

	useEffect(() => {
		if (state === 'in-transition') {
			startTimeRef.current = Date.now()
			setElapsedTime(0) // Reset elapsed time

			intervalIdRef.current = setInterval(() => {
				if (startTimeRef.current) {
					setElapsedTime(Date.now() - startTimeRef.current)
				}
			}, 10) // Update every 10 milliseconds
		} else if (state === 'complete' || state === 'initial') {
			// Clear the interval and reset when transition is complete or in initial state
			if (intervalIdRef.current) {
				clearInterval(intervalIdRef.current)
				intervalIdRef.current = null
			}
			if (state === 'initial') {
				setElapsedTime(0)
				startTimeRef.current = null
			}
		}

		return () => {
			if (intervalIdRef.current) {
				clearInterval(intervalIdRef.current)
			}
		}
	}, [state])

	return {
		elapsedTime,
		isTiming: state === 'in-transition'
	}
}
