import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "src/views/Home/Home";
import React from "react";
const About = lazy(() => import("../views/About/About"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/page2"));
const Page301 = lazy(() => import("../views/page301"));
import Login from "src/views/Login/index"

const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
    );
};

const routes = [
    {
        path: '/',
        element: <Navigate to='/page1' />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: withLoadingComponent( <Page1 /> )
            },
            {
                path: '/page2',
                element: withLoadingComponent( <Page2 /> )
            },
            {
                path: '/page301',
                element: withLoadingComponent( <Page301 />)
            }
        ]
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: '/about',
        element: withLoadingComponent( <About /> )
    },
    {
        path: "/login",
        element: <Login />
    }
    // {
    //     path: "*",
    //     element: <Navigate to='/page1' />
    // }
]


export default routes;