import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
            }
        ]
    }
])