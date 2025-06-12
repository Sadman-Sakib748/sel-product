import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CategoryProduct from "../Pages/Home/CategoryProduct/CategoryProduct";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import HomeV2 from "../Pages/Home/SahredHome/HomeV2/HomeV2";
import HomeV3 from "../Pages/Home/SahredHome/HomeV3/HomeV3";
import Blogs from "../Pages/Bloogs/Blogs";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import ShopAllData from "../Pages/ShopAllData/ShopAllData";
import DashPAges from "../Dashboard/DAshPage/DashPAges";
import DashbordHome from "../Dashboard/DashbordHome";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import AddProductForm from "../Dashboard/AddProductForm/AddProductForm";
import ProductList from "../Dashboard/ProductList/ProductList";
import MyAccount from "../Pages/Shared/MyAccount/MyAccount";
import BuyNow from "../Pages/Shared/BuyNow/BuyNow";
import Banner from "../Pages/Home/Banner/Banner";
import ShowSopData from "../Dashboard/ShowSopData/ShowSopData";
// import Product from "../Pages/Home/Category/Product";

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
        path: 'benner',
        element: <Banner />
      },
      {
        path: 'myAccount',
        element: <MyAccount />
      },
      {
        path: 'byNow',
        element: <BuyNow />
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
      // {
      //   path: 'product/:id',
      //   element: <Product></Product>,
      //   loader: ({params}) => fetch(`http://localhost:5000/products/${params._id}`)
      // },
      {
        path: 'home2',
        element: <HomeV2></HomeV2>
      },
      {
        path: 'home3',
        element: <HomeV3></HomeV3>
      },
      {
        path: 'Blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'welcomePage',
        element: <WelcomePage></WelcomePage>
      },
      {
        path: 'shopAllData',
        element: <ShopAllData></ShopAllData>
      }

    ]
  },
  {
    path: "/dashboard",
    element: <DashPAges />,
    children: [
      { path: "userHome", element: <DashbordHome /> },
      { path: "userProfile", element: <UserProfile /> },
      { path: "userAddPRoduct", element: <AddProductForm /> },
      { path: "userProduct", element: <ProductList /> },
      {
        path: "productItem/:email",
        element: <ShowSopData />,
        loader: ({params}) => fetch(`http://localhost:5000/users?email=${params.email}`)
      },
    ]
  }
]);