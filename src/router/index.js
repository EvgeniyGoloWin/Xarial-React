import { createHashRouter } from "react-router-dom";

import {
  Admin,
  Contract,
  EditForm,
  EditStatus,
  ErrorPage,
  Home,
  Login,
  Project,
  Registration,
} from "../pages";
import PrivateRoutesAdmin from "./privateRoutesAdmin/privateRoutesAdmin";
import { Layout } from "../components";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/admin",
        element: (
          <PrivateRoutesAdmin>
            <Admin />
          </PrivateRoutesAdmin>
        ),
      },
      {
        path: "/project/:number",
        element: <Project />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/admin/contract/:number",
        element: (
          <PrivateRoutesAdmin>
            <Contract />
          </PrivateRoutesAdmin>
        ),
      },
      {
        path: "/admin/editStatus",
        element: (
          <PrivateRoutesAdmin>
            <EditStatus />
          </PrivateRoutesAdmin>
        ),
      },
      {
        path: "/admin/editForm",
        element: (
          <PrivateRoutesAdmin>
            <EditForm />
          </PrivateRoutesAdmin>
        ),
      },
    ],
  },
]);
