import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../../pages/HomePage";
import BoardWritePage from "../../pages/board/BoardWritePage";
import BoardListPage from "../../pages/board/BoardListPage";

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
            element: <BoardListPage />
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