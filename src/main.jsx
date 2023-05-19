import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main/Main.jsx";
import AuthProvider from "./components/provider/AuthProvider";
import Login from "./components/layout/Login/Login";
import Register from "./components/layout/Login/Register";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Home from "./components/pages/Home/Home";
import ActionFigures from "./components/pages/ShopByCatagory/Catagory/CategoryNames/ActionFigures";
import RemoteControl from "./components/pages/ShopByCatagory/Catagory/CategoryNames/RemoteControl";
import BuildingSets from "./components/pages/ShopByCatagory/Catagory/CategoryNames/BuildingSets";
import Blog from "./components/pages/Blog/Blog";
import AllToys from "./components/pages/AllToys/AllToys";
import ToyDetails from "./components/pages/ToyDetails/ToyDetails";
import PrivateRoute from "./components/routes/PrivateRoute";
import AddToy from "./components/pages/AddToy/AddToy";
import MyToys from "./components/pages/MyToys/MyToys";
import PageWrapper from "./components/pages/PageWrapper/PageWrapper";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWrapper title="GR TOYS | Home">
        <Main />
      </PageWrapper>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: (
          <PageWrapper title="GR TOYS | Home">
            <Home />
          </PageWrapper>
        ),
      },
      {
        path: '/alltoys',
        element: (
          <PageWrapper title="GR TOYS | All Toys">
            <AllToys />
          </PageWrapper>
        ),
      },
      {
        path: '/mytoys',
        element: (
          <PrivateRoute>
            <PageWrapper title="GR TOYS | My Toys">
              <MyToys />
            </PageWrapper>
          </PrivateRoute>
        ),
      },
      {
        path: '/toydetails/:id',
        element: (
          <PrivateRoute>
            <PageWrapper title="GR TOYS | Toy Details">
              <ToyDetails />
            </PageWrapper>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: (
          <PageWrapper title="GR TOYS | Login">
            <Login />
          </PageWrapper>
        ),
      },
      {
        path: '/blog',
        element: (
          <PageWrapper title="GR TOYS | Blog">
            <Blog />
          </PageWrapper>
        ),
      },
      {
        path: '/addtoy',
        element: (
          <PrivateRoute>
            <PageWrapper title="GR TOYS | Add Toy">
              <AddToy />
            </PageWrapper>
          </PrivateRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <PageWrapper title="GR TOYS | Register">
            <Register />
          </PageWrapper>
        ),
      },
      {
        path: '/ActionFigures',
        element: (
          <PageWrapper title="GR TOYS | Action Figures">
            <ActionFigures />
          </PageWrapper>
        ),
      },
      {
        path: '/RemoteControl',
        element: (
          <PageWrapper title="GR TOYS | Remote Control">
            <RemoteControl />
          </PageWrapper>
        ),
      },
      {
        path: '/BuildingSets',
        element: (
          <PageWrapper title="GR TOYS | Building Sets">
            <BuildingSets />
          </PageWrapper>
        ),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

);
