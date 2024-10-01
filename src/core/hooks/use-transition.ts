"use client";

import { useEffect, useState } from "react";

type TransitionState = "initial" | "in-transition" | "complete";

type UseTransitionReturn = {
    state: TransitionState;
    value: number;
    start: () => void;
    done: () => void;
    reset: () => void;
};

export default function useTransition({}: {}): UseTransitionReturn {
    const [state, setState] = useState<TransitionState>("initial");
    const [value, setValue] = useState<number>(0);

    const start = () => {
        setState("in-transition");
    };

    useEffect(() => {
        let t: NodeJS.Timeout | null = null;
        if (state === "in-transition") {
            t = setInterval(() => {
                setValue((prevValue) => {
                    if (prevValue >= 60 && prevValue < 80) {
                        return prevValue + 2;
                    } else if (prevValue >= 80 && prevValue < 95) {
                        return prevValue + 0.5;
                    } else if (prevValue >= 95) {
                        return 95;
                    } else {
                        return prevValue + 5;
                    }
                });
            }, 600);
        } else if (state === "complete") {
            setValue(100);
            if (t) clearInterval(t);
        }

        return () => {
            if (t) clearInterval(t);
        };
    }, [state]);

    const done = () => {
        setState("complete");
    };

    const reset = () => {
        setValue(0);
        setState("initial");
    };

    useEffect(() => {
        let t: NodeJS.Timeout | undefined;
        if (value === 100) {
            t = setTimeout(() => {
                reset();
            }, 300);
        }

        return () => {
            if (t) clearTimeout(t);
        };
    }, [value]);

    return {
        state,
        value,
        start,
        done,
        reset,
    };
};
