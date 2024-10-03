import GR from '@/app/_demo/components/effects./gradient-text'

type Pokemon = {
	id: number
	name: string
	sprites: {
		front_default: string
	}
}

const getPokemons = async (): Promise<Pokemon[]> => {
	const pokemons: Pokemon[] = []

	for (let i = 1; i <= 10; i++) {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
		if (res.ok) {
			const data = await res.json()
			pokemons.push({
				id: data.id,
				name: data.name,
				sprites: {
					front_default: data.sprites.front_default,
				},
			})
		}
	}

	// Simulate a very slow server-side operation
	await new Promise(resolve => setTimeout(resolve, 5000))

	return pokemons
}

export default async function Page() {
	const pokemons = await getPokemons()

	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
			<div className="mb-32 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 pb-6 pt-8 backdrop-blur-2xl bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/90">
					Super slow api call:&nbsp;
					<code className="font-mono font-bold">
						setTimeout of
						<GR> 5000ms </GR> on the server
					</code>
				</p>
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				{pokemons.map((pokemon: Pokemon) => (
					<div
						key={pokemon.id}
						className="group rounded-lg border border-transparent px-5 py-4 transition-all hover:border-gray-300 hover:bg-neutral-900 duration-300 border-zinc-800"
					>
						<h2 className="mb-3 text-2xl font-semibold capitalize">
							{pokemon.name}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<img
							src={pokemon.sprites.front_default}
							alt={pokemon.name}
							className="mx-auto"
						/>
					</div>
				))}
			</div>
		</main>
	)
}
