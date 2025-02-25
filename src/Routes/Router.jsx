import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CategoryProduct from "../Pages/Home/CategoryProduct/CategoryProduct";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import HomeV2 from "../Pages/Home/SahredHome/HomeV2/HomeV2";
import HomeV3 from "../Pages/Home/SahredHome/HomeV3/HomeV3";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'categoryProduct/:order',
          element: <CategoryProduct></CategoryProduct>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'home2',
          element: <HomeV2></HomeV2>
        },
        {
          path:'home3',
          element: <HomeV3></HomeV3>
        }

      ]
    },
  ]);