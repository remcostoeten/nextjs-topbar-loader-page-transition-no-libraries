'use client'

import { Tooltip } from 'react-tooltip'
import Header from '../Header/Header'
import GR from '../effects./gradient-text'

export default function HeroText() {
	const handleScroll = () => {
		const element = document.getElementById('docs')
		if (element) {
			const offset = 50 // Adjust this value to your desired offset
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY
			const offsetPosition = elementPosition - offset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			})
		}
	}

	return (
		<section className="relative w-full lg:w-1/2 px-4 lg:px-8 flex flex-col justify-end h-screen -mt-[50px]">
			<Header />
			<h1 className="text-4xl sm:text-[60px] font-semibold tracking-tighter text-neutral-300 leading-none mb-8">
				Saves{' '}
				<GR>
					<span>47,8kb </span>
				</GR>
				by neglecting to use of{' '}
				<span
					data-tooltip-id="tooltip1"
					data-tooltip-content="That's what next-toploader costs"
				>
					{' '}
					libs
				</span>
				. Efficiency baby, next up: your so
				<span
					data-tooltip-id="tooltip2"
					data-tooltip-content="you better n...."
				>
					<GR>
						<i> necessary </i>
					</GR>
				</span>
				lodash.
				<br />
				<small className="text-2xl text-neutral-300 translate-y-8 w-full flex justify-between">
					<i>Own, you own code.</i>
				</small>
			</h1>
			<span>
				<div className="absolute bottom-[40px] right-0 transform -translate-x-1/2 flex flex-col items-center">
					<span onClick={handleScroll} className="mb-2">
						Docs below
					</span>
					<button
						onClick={handleScroll}
						className="flex flex-col items-center text-sm font-medium tracking-tight text-neutral-200 "
						aria-label="Scroll to next section"
					>
						<div className="flex items-center">
							<div className="animate-bounce-slow">
								<svg
									className="animate-bounce"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M4 8L12 16L20 8"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M4 14L12 22L20 14"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<span className="ml-2 text-lg">Docs</span>
						</div>
					</button>
				</div>
			</span>
			<Tooltip id="tooltip1" />
			<Tooltip id="tooltip2" />
		</section>
	)
}
