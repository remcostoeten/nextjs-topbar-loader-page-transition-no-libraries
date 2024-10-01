import Docs from './_demo/components/MainContent/Docs'
import MainContent from './_demo/components/MainContent/MainContent'
import { Section } from './section'

const Home = () => {
	return (
		<>
			<Section>
				<MainContent />
			</Section>
			<Section id="docs">
				<Docs />
			</Section>
		</>
	)
}

export default Home
