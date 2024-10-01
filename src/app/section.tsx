import { ReactNode } from 'react'

export default function Section({
	children,
	id,
	withHeader,
	className
}: {
	children: ReactNode
	id?: string
	withHeader?: boolean
	className?: string
}) {
	return (
		<section
			id={id}
			className={`flex overflow-hidden flex-col pb-4 rounded-xl ${withHeader ? 'h-screen mt-77' : 'h-screen'} ${className}`}
			style={{
				minHeight: withHeader ? 'calc(100vh - 80px)' : 'min-h-screen'
			}}
		>
			{children}
		</section>
	)
}
