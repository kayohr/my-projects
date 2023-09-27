import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home/Home"
import Face from './pages/Facebook/Face';
import Microsoft from './pages/Microsoft/Microsoft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/face",
      element: <Face />,
    },
    {
      path: "/micro",
      element: <Microsoft />,
    }
  ]
  }
])

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


