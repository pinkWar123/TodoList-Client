import Home from '~/pages/Home';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';

const routes = [
    {
        component: <Login />,
        path: '/login',
    },
    {
        component: <SignUp />,
        path: '/signup',
    },
    {
        component: <Home />,
        path: '*',
    },
];

export default routes;
