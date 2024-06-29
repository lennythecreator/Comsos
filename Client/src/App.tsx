import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import { useAuth0 } from '@auth0/auth0-react'
function App() {
  const {user, isAuthenticated} = useAuth0()

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<div>Hello {isAuthenticated ? `${user?.given_name}`: 'World'}</div>} />
      </Routes>
    </Router>


    </>
  )
}

export default App
