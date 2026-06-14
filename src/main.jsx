import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex min-h-full justify-center bg-slate-200">
      <App />
    </div>
  </StrictMode>,
)
