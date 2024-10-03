import TransitionLink from '@/components/transition-link'

const MENU_ITEMS = [
	{ label: 'Normal speed route', href: '/normal', delay: 0 },
	{ label: 'Slow route (2s)', href: '/slow', delay: 2000 },
	{ label: 'Suuuuuper slow route (4s)', href: '/super-slow', delay: 4000 }
]

export default function Navigation() {
	return (
		<nav className="flex gap-6 justify-center items-center self-stretch my-auto text-sm font-medium leading-snug text-white whitespace-nowrap">
			{MENU_ITEMS.map(item => (
				<TransitionLink
					key={item.label}
					href={item.href}
					delay={item.delay}
					className="self-stretch my-auto"
				>
					{item.label}
				</TransitionLink>
			))}
		</nav>
	)
}
