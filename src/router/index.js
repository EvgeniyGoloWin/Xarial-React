import {createHashRouter} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about";
import {ErrorPage} from "../pages/error/error";
import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Admin from "../pages/admin/admin";
import PrivateRoutesAdmin from "../components/privateRoutesAdmin/privateRoutesAdmin";
import Project from "../pages/project/project";
import Contract from "../pages/contract/contract";


export const router = createHashRouter([
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
            path: "/project/:number",
            element: <Project/>
        },
        {
            path: "*",
            element: <ErrorPage/>,
        },
        {
            path: "/admin/contract/:number",
            element: <PrivateRoutesAdmin><Contract/></PrivateRoutesAdmin>
        },
    ]
)
