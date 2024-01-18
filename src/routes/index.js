import Home from '~/pages/Home';
import Login from '~/pages/Login';

const routes = [
    {
        component: <Login />,
        path: '/login',
    },
    {
        component: <Home />,
        path: '*',
    },
];

export default routes;
