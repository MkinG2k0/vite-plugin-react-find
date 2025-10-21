import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GenericComp } from './GenericComp.tsx'
import { Src } from './index.tsx'

type SomeType = {
	value: string
	num: number
}

const Gen = <T extends Record<string, string>>(props: T) => {
	return <div>gen</div>
}

const GenericSomeBigNameReactComponents = <T extends Record<string, string>>(props: T) => {
	return <div>gen</div>
}

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo"/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo"/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Src/>
			<GenericComp<{ bbb: string, asdsa: boolean }> bbb={'asdsadasdsad'}/>
			<GenericComp<SomeType> />
			<GenericComp<SomeType> >
				<div>Content</div>
				<div>Content 2</div>
			</GenericComp>
			<GenericComp<SomeType> >
				<div>Content</div>
				<div>Content 2</div>
			</GenericComp>
			<GenericComp<SomeType> >
			</GenericComp>

			<Gen<{ bbb: string, asdsa: boolean }> bbb={'asdsadasdsad'}/>
			<Gen<SomeType> />
			<Gen<SomeType> >
				<div>Content</div>
				<div>Content 2</div>
			</Gen>
			<Gen<SomeType> >
			</Gen>

			<GenericSomeBigNameReactComponents<{ bbb: string, asdsa: boolean }> bbb={'asdsadasdsad'}/>
			<GenericSomeBigNameReactComponents<SomeType> />
			<GenericSomeBigNameReactComponents<SomeType> >
				<div>Content</div>
				<div>Content 2</div>
			</GenericSomeBigNameReactComponents>
			<GenericSomeBigNameReactComponents<SomeType> >
			</GenericSomeBigNameReactComponents>
		</>
	)
}

export default App
