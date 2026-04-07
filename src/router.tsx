import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'locations', element: <Locations /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])
