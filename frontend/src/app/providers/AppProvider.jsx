import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import BoardPage from "../../pages/board/BoardPage";
import HomePage from "../../pages/HomePage";
import BoardWritePage from "../../pages/board/BoardWritePage";

const router=createBrowserRouter([
  {
    path:"/",
    element:<DefaultLayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "boards",
        children:[
          {
            index: true,
            element: <BoardPage />
          },
          {
            path: "new",
            element: <BoardWritePage />
          },
        ]
      },
     
    ]
  }
]);

const AppProvider=()=>(
  <RouterProvider router={router} />
)

export default AppProvider;