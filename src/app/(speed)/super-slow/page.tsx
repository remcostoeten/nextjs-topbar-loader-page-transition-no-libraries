type Pokemon = {
	id: number
	name: string
	height: number
	weight: number
}

const getPokemons = async (): Promise<Pokemon[]> => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')

	if (res.ok) {
		const data = await res.json()
		const pokemons = await Promise.all(
			data.results.map(async (result: { url: string }) => {
				const pokemonRes = await fetch(result.url)
				return pokemonRes.json()
			})
		)
		return pokemons
	} else {
		return []
	}
}

const page = async () => {
	const pokemons = await getPokemons()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
			<div className="mb-32 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 pb-6 pt-8 backdrop-blur-2xl bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/90">
					Decently slow api call&nbsp;
					<code className="font-mono font-bold">
						setTimeout, 1000
					</code>
				</p>
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				{pokemons.map((pokemon: Pokemon) => (
					<a
						href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-neutral-900 transition-all duration-300 border-zinc-800"
						target="_blank"
						rel="noopener noreferrer"
						key={pokemon.id}
					>
						<h2 className="mb-3 text-2xl font-semibold">
							{pokemon.name}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className="m-0 max-w-[30ch] text-sm opacity-50">
							Height: {pokemon.height}, Weight: {pokemon.weight}
						</p>
					</a>
				))}
			</div>
		</main>
	)
}

export default page
