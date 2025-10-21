import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Src } from './index.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Src/>
		<App/>
		<Src/>
		
	</StrictMode>,
)
