import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Customers from './routes/Costumers.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home title="Home"/>,
        title: "Home"
      },
      {
        path: "/clientes",
        element: <Customers title="Clientes"/>,
        title: "Clientes"
      },

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
