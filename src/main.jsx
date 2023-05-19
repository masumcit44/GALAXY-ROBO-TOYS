import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main/Main.jsx';
import AuthProvider from './components/provider/AuthProvider';
import Login from './components/layout/Login/Login';
import Register from './components/layout/Login/Register';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Home from './components/pages/Home/Home';
import ActionFigures from './components/pages/ShopByCatagory/Catagory/CategoryNames/ActionFigures';
import RemoteControl from './components/pages/ShopByCatagory/Catagory/CategoryNames/RemoteControl';
import BuildingSets from './components/pages/ShopByCatagory/Catagory/CategoryNames/BuildingSets';
import Blog from './components/pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/ActionFigures',
        element: <ActionFigures></ActionFigures>
      },
      {
        path:'/RemoteControl',
        element: <RemoteControl></RemoteControl>
      },
      {
        path:'/BuildingSets',
        element: <BuildingSets></BuildingSets>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
