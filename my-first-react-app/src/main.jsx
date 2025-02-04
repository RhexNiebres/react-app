import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx' //replaced by Greeting
// import Greeting from './Greeting.jsx'
import RenderButtons from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RenderButtons />
  </StrictMode>,
)
