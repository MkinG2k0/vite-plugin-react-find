import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GenericComp } from './GenericComp.tsx'

type SomeType = {
	value: string
	num: number
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App/>
	</StrictMode>,
)
