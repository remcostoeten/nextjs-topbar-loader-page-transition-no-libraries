import React from 'react'
import AuthButtons from './AuthButtons'
import Logo from './Logo'
import Navigation from './Navigation'

const Header: React.FC = () => {
	return (
		<header className="flex overflow-hidden flex-col mb-lg bg-black rounded-xl h-header">
			<div className="flex flex-wrap gap-5 justify-between items-center px-8  w-full border-b border-solid border-b-gray-800 max-md:px-5 h-header max-md:max-w-full">
				<Logo />
				<Navigation />
				<AuthButtons />
			</div>
		</header>
	)
}

export default Header
