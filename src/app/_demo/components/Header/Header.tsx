import React from 'react'
import AuthButtons from './AuthButtons'
import Logo from './Logo'
import Navigation from './Navigation'
import MobileMenu from './mobile-menu'

type HeaderProps = {
	className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header
			className={`z-10 flex overflow-hidden flex-col mb-lg bg-[#10100f] rounded-xl h-header w-screen max-w-screen flex-1 fixed top-0 left-0 ${className}`}
		>
			<div className="flex flex-wrap gap-5 justify-between items-center px-8 w-full border-b border-solid border-b-gray-800 max-md:px-5 h-header max-md:max-w-full">
				<Logo />
				<div className="hidden md:block">
					<Navigation />
				</div>
				<div className="hidden md:block">
					<AuthButtons />
				</div>
				<MobileMenu />
			</div>
		</header>
	)
}

export default Header
