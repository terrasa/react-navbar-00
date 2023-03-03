import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import Root, { loader as rootLoader } from './routes/root'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <RouterProvider router={router} />
)
