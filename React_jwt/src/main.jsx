import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import  Home  from './Components/Home.jsx'
import  Login  from './Components/Login.jsx'
import  Register  from './Components/Register.jsx'
import ForgotPassword from './Components/ForgotPassword.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: 'home',
        element: <Home />,
        errorElement: <div>Page not found</div>
      },
      {
        path: 'Login' ,
        element: <Login />,
        errorElement: <div>Page not found</div>,
        children: [
          {
            path: 'forgot-password',
            element: <ForgotPassword />,
            errorElement: <div>Page not found</div>
          }
        ]
      },
      {
        path: 'Register',
        element: <Register />,
        errorElement: <div>Page not found</div>
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
