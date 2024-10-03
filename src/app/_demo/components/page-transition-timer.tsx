'use client'

import useRouteChangeTimer from '@/core/hooks/use-route-change-timer'
import React, { useEffect, useState } from 'react'

const TransitionTimer: React.FC = () => {
    const { elapsedTime, isTiming } = useRouteChangeTimer()
    const [lastTransitionTime, setLastTransitionTime] = useState<number | null>(null)

    useEffect(() => {
        if (!isTiming && elapsedTime > 0) {
            setLastTransitionTime(elapsedTime)
        }
    }, [isTiming, elapsedTime])

    if (!isTiming && !lastTransitionTime) return null

    return (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-md z-50">
            {isTiming ? (
                <p>Transition time: {(elapsedTime / 1000).toFixed(2)}s</p>
            ) : (
                <p>Last transition: {(lastTransitionTime! / 1000).toFixed(2)}s</p>
            )}
        </div>
    )
}

export default TransitionTimer
