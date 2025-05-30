import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import {Aboutus, Contact, Home, Header, Footer} from './Components/Mylib.jsx'
import Data from './Components/Data.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <Aboutus />
      },
      {
        path: "Contect",
        element: <Contact/>
      },
      {
        path: "Github",
        element: <Data /> ,
        loader: async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!res.ok) throw new Error('Failed to load data');
          const data = await res.json();
          return data;  // This goes to useLoaderData()
        } ,
        
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
