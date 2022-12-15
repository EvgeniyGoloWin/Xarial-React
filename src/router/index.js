import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about";
import {ErrorPage} from "../pages/error/error";
import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Admin from "../pages/admin/admin";
import PrivateRoutes from "../components/privateRoutes/privateRoutes";
import PrivateRoutesAdmin from "../components/privateRoutesAdmin/privateRoutesAdmin";
import User from "../pages/user/user";


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
            path: "/registration",
            element: <Registration/>
        },
        {
            path: "/admin",
            element: <PrivateRoutesAdmin><Admin/></PrivateRoutesAdmin>
        },
        {
            path: "/user",
            element: <PrivateRoutes><User/></PrivateRoutes>
        },
        {
            path: "*",
            element: <ErrorPage/>,
        },
    ]
)