'use client'

import useTransitionBar from '@/core/hooks/use-transition-bar'
import { useEffect, useState } from 'react'

export default function useRouteChangeTimer() {
	const { state } = useTransitionBar()
	const [elapsedTime, setElapsedTime] = useState<number>(0)
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (state === 'in-transition') {
			const startTime = Date.now()
			setElapsedTime(0) // Reset elapsed time

			const id = setInterval(() => {
				setElapsedTime(Date.now() - startTime)
			}, 10) // Update every 10 milliseconds

			setIntervalId(id)
		} else if (state === 'complete') {
			// Do not reset elapsedTime here
			if (intervalId) {
				clearInterval(intervalId)
			}
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId)
			}
		}
	}, [state])

	return {
		elapsedTime,
		isTiming: state === 'in-transition' || state === 'complete'
	}
}
