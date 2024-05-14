import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import AllFood from "../pages/AllFood";
import Gallery from "../pages/Gallery";
import FoodDetails from "../pages/FoodDetails";
import CheckOut from "../pages/CheckOut";
import MyPurchase from "../pages/MyPurchase";
import PrivateRoutes from "../components/PrivateRoutes";
import AddFood from "../pages/AddFood";
import MyAddedFood from "../pages/MyAddedFood";
// import PrivateRoutes from "../components/PrivateRoutes";
// import FoodDetails from "../pages/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allfood",
        element: <AllFood></AllFood>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/foods`),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/details/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/singleFood/${params.id}`),
      },
      {
        path: "/mypurchase",
        element: (
          <PrivateRoutes>
            <MyPurchase></MyPurchase>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myaddedfood",
        element: (
          <PrivateRoutes>
            <MyAddedFood></MyAddedFood>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
