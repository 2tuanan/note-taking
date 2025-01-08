import { privateRoutes } from './privateRoutes';
import MainLayout from '../../layout/MainLayout.jsx';

export const getRoutes = () => {
    return {
        path: '/',
        element: <MainLayout />,
        children: privateRoutes
    }
}