import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLoyout from "../layouts/DefaultLoyout";
import HomePage from "../../pages/HomePage";

const router=createBrowserRouter([
  {
    path:"/",
    element:<DefaultLoyout />,
    children:[
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);

const AppProvider=()=>(
  <RouterProvider router={router} />
)

export default AppProvider;