import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
