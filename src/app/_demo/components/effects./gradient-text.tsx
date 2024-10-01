import React from 'react'

/* 
CSS variales and animations are in the global.css file
GR because otherwise it'll get too bloated
*/

type GRProps = {
	children: React.ReactNode
	variant?:
		| 'default'
		| 'alt'
		| 'alt2'
		| 'animated'
		| 'altAnimated'
		| 'alt2Animated'
}

export function GR({ children, variant = 'default' }: GRProps) {
	let className = 'gradient-text'

	switch (variant) {
		case 'alt':
			className = 'gradient-text-alt'
			break
		case 'alt2':
			className = 'gradient-text-alt-2'
			break
		case 'animated':
			className = 'gradient-text gradient-text-animated'
			break
		case 'altAnimated':
			className = 'gradient-text-alt gradient-text-alt-animated'
			break
		case 'alt2Animated':
			className = 'gradient-text-alt-2 gradient-text-alt-2-animated'
			break
		default:
			break
	}

	return <span className={className}>{children}</span>
}

/**
 * How to use:
 *
 * Import the component in your file: `import GR from './gradient-text';`
 *
 * Use the component in your JSX: `<GR>Text with gradient effect</GR>`
 *
 * Optional: Specify a variant for different gradient styles:
 *
 * - `default`: The default gradient style.
 * - `alt`: An alternative gradient style.
 * - `alt2`: Another alternative gradient style.
 * - `animated`: The default gradient style with animation.
 * - `altAnimated`: The alternative gradient style with animation.
 * - `alt2Animated`: The second alternative gradient style with animation.
 *
 * Example with variant: `<GR variant="altAnimated">Animated alternative gradient text</GR>`
 */
