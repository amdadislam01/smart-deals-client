import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProduct from "../pages/AllProduct/AllProduct";
import MyProduct from "../pages/MyProduct/MyProduct";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../auth/Login/Login";
import SignUp from "../auth/SignUp/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import MyBids from "../pages/MyBids/MyBids";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

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
            path: '/myproduct',
            element: <PrivetRoutes><MyProduct /></PrivetRoutes>
        },
        {
            path: '/mybids',
            element: <PrivetRoutes><MyBids /></PrivetRoutes>,
        },
        {
            path: 'productDetail/:id',
            element: <PrivetRoutes><ProductDetails /></PrivetRoutes> ,
            loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        },
    ]
  }
])