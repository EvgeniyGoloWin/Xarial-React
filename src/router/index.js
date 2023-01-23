import {createHashRouter} from "react-router-dom";
import Home from "../pages/home/home";
import {ErrorPage} from "../pages/error/error";
import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Admin from "../pages/admin/admin";
import PrivateRoutesAdmin from "../components/privateRoutesAdmin/privateRoutesAdmin";
import Project from "../pages/project/project";
import Contract from "../pages/contract/contract";
import EditStatus from "../pages/editStatus/editStatus";
import EditFrom from "../pages/editForm/editFrom";


export const router = createHashRouter([
        {
            path: "/",
            element: <Home/>,
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
        {
            path: "/admin/editStatus",
            element: <PrivateRoutesAdmin><EditStatus/></PrivateRoutesAdmin>
        },
        {
            path: "/admin/editForm",
            element: <PrivateRoutesAdmin><EditFrom/></PrivateRoutesAdmin>
        }
    ]
)
