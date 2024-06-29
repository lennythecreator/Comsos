import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import { useAuth0 } from '@auth0/auth0-react'
import Landingpage from './Landingpage'
function App() {
  const {user, isAuthenticated} = useAuth0()

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={isAuthenticated ? <Landingpage /> : <div>Please Log in</div>} />
      </Routes>
    </Router>


    </>
  )
}

export default App
