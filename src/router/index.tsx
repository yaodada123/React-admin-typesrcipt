import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "src/views/Home/Home";
const About = lazy(() => import("../views/About/About"))

const routes = [
    {
        path: '/',
        element: <Navigate to='/home'/> 
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/about',
        element: <About />
    },
]


export default routes;