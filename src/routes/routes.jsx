import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProduct from "../pages/AllProduct/AllProduct";
import MyProduct from "../pages/MyProduct/MyProduct";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../auth/Login/Login";
import SignUp from "../auth/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <PageNotFound />,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/signup',
            Component: SignUp
        },
        {
            path: '/allproduct',
            Component: AllProduct
        },
        {
            path: 'myproduct',
            Component: MyProduct
        }
    ]
  }
])