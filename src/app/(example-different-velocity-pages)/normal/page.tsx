import GR from '@/app/_demo/components/effects./gradient-text'

type PageProps = {}

const page: React.FC<PageProps> = async ({ }) => {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
			<div className="mb-32 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="-z-10 left-0 top-0 flex w-full justify-center border-b border-neutral-800 pb-6 pt-8 backdrop-blur-2xl bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/90">
					Decently slow api call&nbsp;
					<code className="font-mono font-bold">
						setTimeout of
						<GR> 0ms </GR> on the api call
					</code>
				</p>
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<span className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-neutral-900 duration-300 border-zinc-800">
					<h2 className="mb-3 text-2xl font-semibold">
						a titles
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Normal no fetch{' '}
					</p>
				</span>
			</div>
		</main>
	)
}

export default page
