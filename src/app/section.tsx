import React from 'react'

export function Section({
	children,
	withHeader
}: {
	children: React.ReactNode
	withHeader?: boolean
}) {
	return (
		<section
			className={`flex overflow-hidden flex-col pb-4 rounded-xl ${withHeader ? 'h-screen mt-77' : 'h-screen'}`}
			style={{
				minHeight: withHeader ? 'calc(100vh - 80px)' : 'min-h-screen'
			}}
		>
			{children}
		</section>
	)
}
