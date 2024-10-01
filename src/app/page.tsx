import React from 'react'
import MainContent from './_demo/components/MainContent/MainContent'

const App: React.FC = () => {
	return (
		<>
			<div className="flex overflow-hidden flex-col pb-4  rounded-xl" id="section-1">
				<Section withHeader={true}>
					<MainContent />
				</Section>
			</div>
			<div id="section-2">
				<section className="h-screen">
					<h1>Section 2</h1>
				</section>
			</div>
		</>
	)
}

export default App
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
			style={{ height: withHeader ? 'calc(100vh - 80px)' : '100vh' }}
		>
			{children}
		</section>
	)
}
