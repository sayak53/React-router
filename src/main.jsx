import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Users from './components/Navbar/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:'/Home',
        element:<Home></Home>
      },
      {
        path:'/Users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
        element:<Users></Users>
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      }
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
