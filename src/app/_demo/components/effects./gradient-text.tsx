import React from 'react'

export default function GR({ children }: { children: React.ReactNode }) {
	return <span className="gradient-text">{children}</span>
}
