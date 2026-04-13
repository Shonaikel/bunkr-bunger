import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { router } from './router'
import './index.css'

function applyViewportScale() {
  const root = document.getElementById('root')
  if (!root) return
  const scale = Math.min(1, window.innerWidth / 1920)
  root.style.zoom = String(scale)
}

applyViewportScale()
window.addEventListener('resize', applyViewportScale)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
