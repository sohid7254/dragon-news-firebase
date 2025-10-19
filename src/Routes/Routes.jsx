import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNEws from "../Pages/CategoryNEws";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children:[
            {
                path: "",
                element: <Home/>
            },
            {
                path: '/category/:id',
                element: <CategoryNEws/>,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: '/news',
        element: <p>This is news page</p>
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>
    },
    {
        path: "/*",
        element: <h2>Error404</h2>
    }
])

export default router