import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import NotFound from './pages/NotFound.jsx'
import Nli from './pages/Nli.jsx'
import { useAuth } from './AuthContext.js'
/* topbar */
import './components/topbar/topbar.css'
import Topbar from './components/topbar/topbar.jsx'
/* sidebar */
import './components/sidebar/sidebar.css'
import Sidebar from './components/sidebar/sidebar.jsx'
import Games from "./pages/Games.jsx"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const { loggedIn } = useAuth()

  return (
    <div className={loggedIn ? '' : 'no-sidebar'}>
      <ScrollToTop />
      <Topbar />
      {loggedIn && <Sidebar />}
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Nli />} />
        <Route path="/account/login" element={loggedIn ? <Navigate to="/" replace /> : <Placeholder title="Login" />} />
        <Route path="/account/signup" element={loggedIn ? <Navigate to="/" replace /> : <Placeholder title="Sign Up" />} />
        <Route path="/nli" element={<Navigate to="/" replace />} />
        <Route path="/games" element={<Games />} />
        <Route path="/catalog" element={<Placeholder title="Catalog" />} />
        <Route path="/develop" element={<Placeholder title="Develop" />} />
        <Route path="/upgrades/robux" element={<Placeholder title="Robux" />} />
        <Route path="/upgrades/bc" element={<Placeholder title="Builders Club" />} />
        <Route path="/profile" element={<Placeholder title="Profile" />} />
        <Route path="/messages" element={<Placeholder title="Messages" />} />
        <Route path="/friends" element={<Placeholder title="Friends" />} />
        <Route path="/my/avatar" element={<Placeholder title="Avatar" />} />
        <Route path="/my/inventory" element={<Placeholder title="Inventory" />} />
        <Route path="/trades" element={<Placeholder title="Trade" />} />
        <Route path="/groups" element={<Placeholder title="Groups" />} />
        <Route path="/forum" element={<Placeholder title="Forum" />} />
        <Route path="/blog" element={<Placeholder title="Blog" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
