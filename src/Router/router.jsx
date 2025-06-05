import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AvailableFoods from "../Pages/AvaiableFoods/AvailableFoods";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import RequestedFoods from "../Pages/RequestedFoods/RequestedFoods";
import AvailableFoodDetails from "../Pages/AvaiableFoods/AvailableFoodDetails";
import Home from "../Pages/Home/Home";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateUser from "../Pages/UpdateUser/UpdateUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayOut></RootLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true, 
                element: <Home></Home>
            }, 
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, 
            {
                path: '/addFood',
                element: <PrivateRoutes>
                    <AddFood></AddFood>
                </PrivateRoutes>
            }, 
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>
            }, 
            {
                path: "/foodDetails/:id",
                element: <PrivateRoutes>
                    <AvailableFoodDetails></AvailableFoodDetails>
                </PrivateRoutes>
            },
            {
                path: '/manageMyFoods',
                element: <PrivateRoutes>
                    <ManageFoods></ManageFoods>
                </PrivateRoutes>
            },
            {
                path: '/manageMyFoods/update/:id', 
                element: <PrivateRoutes>
                    <UpdateFood></UpdateFood>
                </PrivateRoutes>
            },
            {
                path: '/requestedFoods', 
                element: <PrivateRoutes>
                    <RequestedFoods></RequestedFoods>
                </PrivateRoutes>
            },
            {
                path: "/updateUserInfo", 
                element: <PrivateRoutes>
                    <UpdateUser></UpdateUser>
                </PrivateRoutes>
            }
        ]
    }
])