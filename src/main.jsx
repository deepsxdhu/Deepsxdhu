import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "./index.css"; // or "./App.css" depending on where you wrote @tailwind lines

import "@fontsource/inter";
import "@fontsource/bricolage-grotesque";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
