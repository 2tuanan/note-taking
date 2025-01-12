import { lazy } from "react";
const Home = lazy(() => import('../../views/Home'));
const ManageUser = lazy(() => import('../../views/admin/ManageUser'));

export const privateRoutes =[
    {
        path: '/',
        element: <Home />,
        role: 'user'
    },
    {
        path: '/admin',
        element: <ManageUser />,
        role: 'admin'
    }
]