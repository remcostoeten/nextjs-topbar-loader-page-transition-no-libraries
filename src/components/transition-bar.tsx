"use client";

import useTransition from "@/core/hooks/use-transition";
import { createContext, ReactNode } from "react";

interface TransitionBarProps {
    children: ReactNode;
}

export const TransitionBarContext = createContext<UseTransitionReturn | null>(null);

export default function TransitionBar({ children }: TransitionBarProps) {
    const transition = useTransition();

    return (
        <TransitionBarContext.Provider value={transition}>
            {transition.state !== "initial" && (
                <div
                    className="fixed top-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-blue-300 duration-300 transition-all ease-in-out"
                    style={{ width: `${transition.value}%` }}
                />
            )}
            {children}
        </TransitionBarContext.Provider>
    );
};
