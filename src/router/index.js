import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about";
import {ErrorPage} from "../pages/error";
import Login from "../pages/login/login";


export const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "*",
            element: <ErrorPage/>,
        },
    ]
)