import { createRoot } from 'react-dom/client'
import App from './frontend/app/App'

const rootEl = document.getElementById('root')!
createRoot(rootEl).render(<App />)