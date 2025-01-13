import { lazy } from "react";
const ManageUser = lazy(() => import('../../views/admin/ManageUser'));

export const privateRoutes =[
    {
        path: '/admin',
        element: <ManageUser />,
        role: 'admin'
    }
]