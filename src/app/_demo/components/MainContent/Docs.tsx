import ModernCodeBlock from './modern-code-lock'

export default function Docs() {
	return (
		<div id="docs" className="min-h-screen max-w-5xl mx-auto text-gray-100">
			<main className=" mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold mb-8">
					Building a global Transition bar in Next.js
				</h1>

				<p className="mb-6">
					The first step to implementing a Transition indicator for
					page transitions on your Next.js application is to build a
					Transition bar component and make it global. Let's go
					through the process step by step.
				</p>

				<h2 className="text-2xl font-semibold mb-4">
					1. Create a custom Hook: useTransition
				</h2>

				<ModernCodeBlock
					code={`
"use client";
import { useEffect, useState } from "react";

export const useTransition = () => {
  const [state, setState] = useState("initial");
  const [value, setValue] = useState(0);

  const start = () => {
    setState("in-Transition");
  };

  useEffect(() => {
    let t = setInterval(
      () => {
        if (state === "in-Transition") {
          if (value >= 60 && value < 80) {
            setValue(value + 2);
          } else if (value >= 80 && value < 95) {
            setValue(value + 0.5);
          } else if (value >= 95) {
            setValue(95);
          } else {
            setValue(value + 5);
          }
        } else if (state === "complete") {
          setValue(100);
          clearInterval(t);
        }
      },
      state === "in-Transition" ? 600 : null
    );

    return () => clearInterval(t); // cleanup
  }, [state, value]);

  const done = () => {
    setState("complete");
  };

  const reset = () => {
    setValue(0)
    setState("initial");
  };

  useEffect(() => {
    let t;
    if (value === 100) {
      t = setTimeout(() => {
        reset();
      }, 300);
    }

    return () => clearTimeout(t); // cleanup
  }, [value]);

  return {
    state,
    value,
    start,
    done,
    reset,
  };
};
          `}
					language="typescript"
					title="useTransition.ts"
					description="Custom Hook for managing Transition state"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					2. Create the transitionBar component
				</h2>

				<ModernCodeBlock
					code={`
"use client";
import React, { createContext } from "react";
import { useTransition } from "../hooks/useTransition";

export const transitionBarContext = createContext(null);

const transitionBar = ({ children }) => {
  const Transition = useTransition();

  return (
    <transitionBarContext.Provider value={Transition}>
      {Transition.state !== "initial" && (
      <div
        className="fixed top-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-blue-300 duration-300 transition-all ease-in-out"
        style={{ width: \`\${Transition.value}%\` }}
      />
      )}
      {children}
    </transitionBarContext.Provider>
  );
};
export default transitionBar;
          `}
					language="tsx"
					title="transitionBar.tsx"
					description="transitionBar component with context provider"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					3. Create a useTransitionBar Hook
				</h2>

				<ModernCodeBlock
					code={`
'use client'
import { useContext } from "react";
import { transitionBarContext } from "../components/transitionBar";

export const useTransitionBar = () => {
  const Transition = useContext(transitionBarContext);

  if (Transition === null) {
    throw new Error(
      "useTransitionBar must be used within the transitionBarProvider"
    );
  }

  return Transition;
};
          `}
					language="typescript"
					title="useTransitionBar.ts"
					description="Hook for accessing Transition bar context"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					4. Create a transitionLink component
				</h2>

				<ModernCodeBlock
					code={`
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";
import { useTransitionBar } from "../hooks/useTransitionBar";

const transitionLink = ({ href, children, ...rest }) => {
  const router = useRouter();
  const Transition = useTransitionBar();

  const navigateToDestination = (e) => {
    e.preventDefault();
    Transition.start(); // show the indicator

    startTransition(() => {
      router.push(href);
      Transition.done(); // only runs when the destination page is fully loaded
    });
  };

  return (
    <Link href={href} onClick={navigateToDestination} {...rest}>
      {children}
    </Link>
  );
};

export default transitionLink;
          `}
					language="tsx"
					title="transitionLink.tsx"
					description="Custom Link component that triggers Transition bar"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					5. Wrap your app with the transitionBar component
				</h2>

				<ModernCodeBlock
					code={`
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <transitionBar>{children}</transitionBar>
      </body>
    </html>
  );
}
          `}
					language="tsx"
					title="layout.tsx"
					description="Root layout wrapped with transitionBar"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					Usage Example
				</h2>

				<ModernCodeBlock
					code={`
import transitionLink from '../components/transitionLink';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js transition Bar Demo</h1>
      <transitionLink href="/posts" className="text-blue-500 hover:underline">
        Go to Posts
      </transitionLink>
    </main>
  )
}
          `}
					language="tsx"
					title="page.tsx"
					description="Example usage of transitionLink in a page"
				/>

				<p className="mt-8">
					By following these steps, you'll have a fully functional
					global Transition bar for your Next.js application. The
					Transition bar will appear during page transitions,
					providing visual feedback to users as they navigate through
					your site.
				</p>
			</main>
		</div>
	)
}
