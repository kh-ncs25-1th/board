import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../../pages/HomePage";
import BoardWritePage from "../../pages/board/BoardWritePage";
import BoardListPage from "../../pages/board/BoardListPage";
import BoardDetailPage from "../../pages/board/BoardDetailPage";
import ProfilePage from "../../pages/Profile";
import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "boards",
        children: [
          {
            index: true,
            element: <BoardListPage />
          },
          {
            path: "new",
            element: <BoardWritePage />
          },
          {
            path: ":boardId",
            element: <BoardDetailPage />
          },
        ]
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "signup",
        element: <RegisterPage />
      }
    ]
  }
]);

const AppProvider = () => (
  <RouterProvider router={router} />
)

export default AppProvider;