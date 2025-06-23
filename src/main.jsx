import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './pages/Home'
import AddRestaurant from './pages/AddRestaurant'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddRestaurant />
  </StrictMode>,
)
