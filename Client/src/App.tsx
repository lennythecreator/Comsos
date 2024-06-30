import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  const {user, isAuthenticated} = useAuth0()

  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={isAuthenticated ? <h1>Welcome {user?.given_name}</h1> : <div>Please Log in</div>} />
        </Routes>
      </Router>

      <Footer />



    </>
  )
}

export default App
