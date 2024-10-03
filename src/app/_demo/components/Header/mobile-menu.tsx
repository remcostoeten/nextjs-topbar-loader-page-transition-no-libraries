'use client'

import TransitionLink from '@/components/transition-link'
import { MenuIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import AuthButtons from './AuthButtons'

const MENU_ITEMS = [
    { label: 'Normal speed route', href: '/normal' },
    { label: 'Slow route (2s)', href: '/slow' },
    { label: 'Suuuuuper slow route (4s)', href: '/super-slow' }
]

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <button onClick={toggleMenu} className="md:hidden">
                <MenuIcon className="w-6 h-6 text-white" />
            </button>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMenu}
            >
                <div
                    className={`fixed right-0 top-0 bottom-0 w-64 bg-[#10100f] p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={toggleMenu} className="absolute top-4 right-4">
                        <XIcon className="w-6 h-6 text-white" />
                    </button>
                    <nav className="flex flex-col gap-4 mt-12">
                        {MENU_ITEMS.map(item => (
                            <TransitionLink
                                key={item.label}
                                href={item.href}
                                className="text-white"
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </TransitionLink>
                        ))}
                    </nav>
                    <div className="mt-8">
                        <AuthButtons />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
