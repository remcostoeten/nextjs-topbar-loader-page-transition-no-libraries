import HeroImage from './HeroImage'
import HeroText from './HeroText'

export default function MainContent() {
	return (
		<>
			<main className="h-[calc(100vh-72px)] overflow-hidden">
				<div className="flex flex-col lg:flex-row h-full -translate-y-24">
					<HeroText />
					<HeroImage />
				</div>
			</main>
		</>
	)
}
