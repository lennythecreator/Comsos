import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-ik11uujq7rk5h5bc.us.auth0.com"
    clientId="uimcLHky1MEV4mfQoA40A2kB3Tq40Xf7"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/profile'
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)
