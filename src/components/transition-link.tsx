"use client";

import useTransitionBar from "@/core/hooks/use-transition-bar";


type TransitionLinkProps = {
    children: React.ReactNode;
    rest: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const TransitionLink = ({ children, rest }: TransitionLinkProps) => {
    const progress = useTransitionBar();

    return (
        <button onClick={() => progress.start()} {...rest}>
            {children}
        </button>
    );
};

export default TransitionLink;
