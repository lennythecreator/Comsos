import Login from "./components/Login"
import { useAuth0 } from "@auth0/auth0-react"

const Home = () => {
  const {isAuthenticated} = useAuth0()

  return (
    <>
            {isAuthenticated ? <h1>User is Logged in</h1> : <h1>Please log in</h1>}
            <Login />
    </>
  )
}

export default Home
