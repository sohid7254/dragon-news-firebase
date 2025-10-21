import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNEws from "../Pages/CategoryNEws";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/category/:id",
                element: <CategoryNEws />,
                loader: () => fetch("/news.json"),
            },
        ],
    },
    {
        path: "/news-details/:id",
        element: (
            <PrivateRoute>
                <NewsDetails />
            </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    },
]);

export default router