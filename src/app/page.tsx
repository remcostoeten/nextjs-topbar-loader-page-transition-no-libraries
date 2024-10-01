'use client'

import Docs from './_demo/components/MainContent/Docs'
import MainContent from './_demo/components/MainContent/main-content'
import Section from './section'

const Home = () => {
	return (
		<>
			<Section className="mt-header">
				<MainContent />
			</Section>
			<Section>
				<Docs />
			</Section>
		</>
	)
}

export default Home
