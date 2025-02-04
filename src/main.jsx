import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Глобальные стили, если нужны

import Game from './components/Game/Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
