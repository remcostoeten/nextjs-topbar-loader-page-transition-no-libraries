import Docs from './Docs'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

export default function MainContent() {
	return (
		<>
			<main className="h-[calc(100vh-72px)] overflow-hidden">
				<div className="flex flex-col lg:flex-row h-full">
					<HeroText />
					<HeroImage />
				</div>
			</main>
			<section className="mt-[100px] mx-auto px-4 py-8">
				<Docs />
			</section>
		</>
	)
}
