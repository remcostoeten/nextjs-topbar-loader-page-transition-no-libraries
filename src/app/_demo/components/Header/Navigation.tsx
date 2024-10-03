import TransitionLink from '@/components/transition-link'

const MENU_ITEMS = [
	{ label: 'Normal speed route', href: '/normal' },
	{ label: 'Slow route (2s)', href: '/slow' },
	{ label: 'Suuuuuper slow route (4s)', href: '/super-slow' }
]

export default function Navigation() {
	return (
		<nav className="flex gap-6 justify-center items-center text-sm font-medium leading-snug text-white whitespace-nowrap">
			{MENU_ITEMS.map(item => (
				<TransitionLink
					key={item.label}
					href={item.href}
					className="self-stretch my-auto"
				>
					{item.label}
				</TransitionLink>
			))}
		</nav>
	)
}
