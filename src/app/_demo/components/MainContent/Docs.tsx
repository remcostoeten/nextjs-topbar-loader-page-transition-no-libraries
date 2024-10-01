import ModernCodeBlock from './modern-code-lock'

export default function Docs() {
	return (
		<div id="docs" className="min-h-screen max-w-5xl mx-auto text-gray-100">
			<main className="mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold mb-8">
					Implementing a Global Transition Bar in Next.js
				</h1>

				<p className="mb-6">
					To introduce a smooth transition effect for page changes in
					your Next.js project, the goal is to create a global
					Transition Bar component. Let's walk through the steps to
					get it up and running.
				</p>

				<h2 className="text-2xl font-semibold mb-4">
					1. Build a custom Hook: useTransition
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
    setValue(0);
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
					description="Custom Hook to handle the transition state"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					2. Build the transitionBar Component
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
					description="transitionBar Component that provides global context"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					3. Add a Hook to Access the Transition Context
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
					description="Hook to access transitionBar context"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					4. Create a Custom Link: transitionLink
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
    Transition.start(); // start the transition

    startTransition(() => {
      router.push(href);
      Transition.done(); // complete the transition when the new page is ready
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
					description="Custom Link component that triggers the transitionBar"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					5. Wrap the App with transitionBar
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
					description="Global layout wrapped with transitionBar"
				/>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					Example Usage
				</h2>

				<ModernCodeBlock
					code={`
import transitionLink from '../components/transitionLink';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js Transition Bar Example</h1>
      <transitionLink href="/posts" className="text-blue-500 hover:underline">
        Go to Posts
      </transitionLink>
    </main>
  )
}
          `}
					language="tsx"
					title="page.tsx"
					description="Demonstrating the use of transitionLink in a page"
				/>

				<p className="mt-8">
					Following these steps will allow you to integrate a global
					Transition Bar in your Next.js app, giving users a smooth
					and intuitive experience as they navigate between pages.
				</p>
			</main>
		</div>
	)
}
