import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckUrl from "../Components/Layout/CheckUrl";
import CheckPass from "../Components/Layout/CheckPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckUrl />,
  },
  {
    path: "/check-pass",
    element: <CheckPass />,
  },
]);

function LocalRouter() {
  return <RouterProvider router={router} />;
}

export default LocalRouter;
