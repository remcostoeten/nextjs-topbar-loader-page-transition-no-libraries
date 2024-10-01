import GR from '@/app/_demo/components/effects./gradient-text'

type Post = {
	id: number
	title: string
	body: string
}

const getPosts = async (): Promise<Post[]> => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	);

	if (res.ok) {
		return new Promise((resolve) => {
			setTimeout(async () => {
				const data = await res.json();
				resolve(data);
			}, 2000);
		});
	} else {
		return [];
	}
}

const page = async () => {
	const posts = await getPosts()

	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
			<div className="mb-32 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 pb-6 pt-8 backdrop-blur-2xl bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/90">
					Decently slow api call:&nbsp;
					<code className="font-mono font-bold">
						setTimeout of
						<GR> 2000ms </GR> on the api call
					</code>
				</p>
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				{posts.map((post: Post) => (
					<a
						href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
						className="group rounded-lg border border-transparent px-5 py-4 transition-all hover:border-gray-300 hover:bg-neutral-900 duration-300 border-zinc-800"
						target="_blank"
						rel="noopener noreferrer"
						key={post.id}
					>
						<h2 className="mb-3 text-2xl font-semibold">
							{post.title}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className="m-0 max-w-[30ch] text-sm opacity-50">
							{post.body}
						</p>
					</a>
				))}
			</div>
		</main>
	)
}

export default page
