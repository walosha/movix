import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./pages/error";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
