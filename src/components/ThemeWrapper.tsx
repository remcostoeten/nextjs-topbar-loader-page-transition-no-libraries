'use client'

import TransitionBar from "./transition-bar"


/* Can also wrap inside layout but in a real app you'll usually have a theme provider, tooltipprovider, apollo provider, etc. so it's a good idea to have a wrapper like this */

export default function ThemeWrapper({ children }: PageProps) {
    return (
        <TransitionBar>{children}</TransitionBar>
    )
}

