import React from 'react'
import Header from './_demo/components/Header/Header'
import MainContent from './_demo/components/MainContent/MainContent'

const App: React.FC = () => {
	return (
		<div className="flex overflow-hidden flex-col pb-4 bg-black rounded-xl">
			<Header />
			<Section withHeader={true}>
				<MainContent />
			</Section>
		</div>
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
			className={`flex overflow-hidden flex-col pb-4 bg-black rounded-xl ${withHeader ? 'h-screen mt-77' : 'h-screen'}`}
			style={{ height: withHeader ? 'calc(100vh - 80px)' : '100vh' }}
		>
			{children}
		</section>
	)
}
