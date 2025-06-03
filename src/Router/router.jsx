import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AvailableFoods from "../Pages/AvaiableFoods/AvailableFoods";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import RequestedFoods from "../Pages/RequestedFoods/RequestedFoods";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayOut></RootLayOut>,
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
                path: '/manageMyFoods',
                element: <PrivateRoutes>
                    <ManageFoods></ManageFoods>
                </PrivateRoutes>
            },
            {
                path: '/requestedFoods', 
                element: <PrivateRoutes>
                    <RequestedFoods></RequestedFoods>
                </PrivateRoutes>
            }
        ]
    }
])