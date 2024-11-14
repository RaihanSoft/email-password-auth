import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Components/Login';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Register from './Components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [

      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
