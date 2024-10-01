'use client'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { GR as G } from '../effects./gradient-text'

export default function HeroText() {
	const handleScroll = () => {
		document
			.getElementById('next-section')
			?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className="relative w-full lg:w-1/2 px-4 lg:px-8 flex flex-col justify-end h-screen -mt-36">
			<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter text-neutral-300 leading-none mb-8">
				No need for libs <i>&</i>{' '}
				<Tippy content="well, u need some">
					<span>
						<G variant="animated">packages</G>
					</span>
				</Tippy>
				, as we saved a <G variant="altAnimated">whoppin</G>{' '}
				<Tippy content="That's what next-toploader costs">
					<span>47,8kB</span>
				</Tippy>
				. Talk about efficiency.
				<br /> next up: your so{' '}
				<Tippy content="you better n....">
					<span>
						<G>
							<i>necessary</i>
						</G>
					</span>
				</Tippy>{' '}
				lodash.
			</h1>
			<span>
				<small className="text-3xl translate-y-8">
					<i>Own, you own code.</i>
				</small>
			</span>

			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
				<button
					onClick={handleScroll}
					className="flex flex-col items-center text-sm font-medium tracking-tight text-neutral-200"
					aria-label="Scroll to next section"
				>
					<span className="mb-2">Examples below</span>
					<div className="animate-bounce-slow">
						<svg
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
				</button>
			</div>

			<style jsx>{`
				@keyframes bounce-slow {
					0%,
					100% {
						transform: translateY(-15%);
						animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
					}
					50% {
						transform: translateY(0);
						animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
					}
				}
				.animate-bounce-slow {
					animation: bounce-slow 2s infinite;
				}
			`}</style>
		</section>
	)
}
