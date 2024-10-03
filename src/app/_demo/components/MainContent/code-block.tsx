'use client'

import { cn } from '@/core/helpers/cn'
import { motion } from 'framer-motion'
import { Check, ChevronDown, ChevronUp, Copy } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect, useState } from 'react'

type CodeBlockProps = {
	code: string
	language: string
	title: string
	description?: string
}

export default function CodeBlock({
	code,
	language,
	title,
	description
}: CodeBlockProps) {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isCopied, setIsCopied] = useState(false)

	useEffect(() => {
		if (isExpanded) {
			Prism.highlightAll()
		}
	}, [isExpanded])

	const copyToClipboard = () => {
		navigator.clipboard.writeText(code)
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 2000)
	}

	return (
		<div className="w-full">
			<div className="px-6 py-4 bg-[#171616] border border-[#1b1b1a]">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-semibold text-gray-100">
						{title}
					</h3>
					<div className="flex items-center space-x-2">
						<button
							onClick={copyToClipboard}
							className="p-1 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-colors"
							aria-label="Copy code"
						>
							{isCopied ? (
								<Check size={18} />
							) : (
								<Copy size={18} />
							)}
						</button>
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="p-1 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-colors"
							aria-label={
								isExpanded ? 'Collapse code' : 'Expand code'
							}
						>
							{isExpanded ? (
								<ChevronDown size={18} />
							) : (
								<ChevronUp size={18} />
							)}
						</button>
					</div>
				</div>
				{description && (
					<p className=" text-sm text-gray-400">{description}</p>
				)}
			</div>
			<motion.div
				initial={false}
				animate={{ height: isExpanded ? 'auto' : '0px' }}
				transition={{ duration: 0.3 }}
				// @ts-ignore
				className={cn(
					'overflow-hidden ',
					isExpanded
						? 'border-t border-gray-800 overflow-x-scroll'
						: ''
				)}
			>
				<pre
					className={`language-${language} p-6 text-sm overflow-x-auto whitespace-pre-wrap`}
				>
					<code>{code.trim()}</code>
				</pre>
			</motion.div>
			{!isExpanded && (
				<div
					className="px-6 py-3 text-sm text-gray-500 bg-[#1b1b1a] border-l border-b border-r border-[#1b1b1a] cursor-pointer"
					onClick={() => setIsExpanded(true)}
				>
					Click to expand
				</div>
			)}
		</div>
	)
}
