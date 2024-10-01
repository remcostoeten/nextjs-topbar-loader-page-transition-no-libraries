import Link from 'next/link'

function Logo() {
	return (
		<Link href="/" className="flex gap-4 items-center self-stretch my-auto">
			{RandomSvgLogo()}
			<span className="text-sm text-gray-300 font-semibold leading-none">
				Next.js native<br></br> topbar loader
			</span>
		</Link>
	)
}

export default Logo

export function RandomSvgLogo() {
	return (
		<svg
			className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[0.86]"
			width="24"
			height="28"
			viewBox="0 0 24 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.25244 11.4337C6.49158 9.65996 7.87995 8.25799 9.65202 8.00079L22.6902 6.10838C23.347 6.01304 23.9115 6.57144 23.8228 7.2289L21.9978 20.7649C21.7587 22.5386 20.3703 23.9406 18.5982 24.1978L5.56008 26.0902C4.90324 26.1856 4.33878 25.6272 4.42742 24.9697L6.25244 11.4337Z"
				fill="url(#paint0_linear_837_26)"
			/>
			<g filter="url(#filter0_b_837_26)">
				<path
					d="M2.00244 7.23502C2.24158 5.46132 3.62995 4.05935 5.40202 3.80215L18.4402 1.90974C19.097 1.8144 19.6615 2.37281 19.5728 3.03026L17.7478 16.5663C17.5087 18.34 16.1203 19.742 14.3482 19.9992L1.31008 21.8916C0.653237 21.9869 0.0887797 21.4285 0.177422 20.7711L2.00244 7.23502Z"
					fill="white"
					fillOpacity="0.3"
				/>
			</g>
			<defs>
				<filter
					id="filter0_b_837_26"
					x="-7.41542"
					y="-5.68431"
					width="34.5808"
					height="35.1699"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur
						in="BackgroundImageFix"
						stdDeviation="3.7917"
					/>
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_837_26"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_837_26"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_837_26"
					x1="5.31845"
					y1="25.695"
					x2="3.14656"
					y2="7.78937"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.0616042" stopColor="#FFF3CA" />
					<stop offset="0.323137" stopColor="#FF9F94" />
					<stop offset="0.716195" stopColor="#AD72BD" />
					<stop offset="1" stopColor="#7152DA" />
				</linearGradient>
			</defs>
		</svg>
	)
}
