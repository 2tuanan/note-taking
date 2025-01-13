import { lazy } from "react";
const ManageUser = lazy(() => import('../../views/admin/ManageUser'));
const MainPage = lazy(() => import('../../views/user/MainPage'));

export const privateRoutes =[
    {
        path: '/admin',
        element: <ManageUser />,
        role: 'admin'
    },
    {
        path: '/user',
        element: <MainPage />,
        role: 'user'
    }
]