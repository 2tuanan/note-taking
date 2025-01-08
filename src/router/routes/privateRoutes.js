import { lazy } from "react";
const Home = lazy(() => import('../../views/Home'));

export const privateRoutes =[
    {
        path: '/',
        element: <Home />,
        role: 'user'
    }
]