import { path } from '~/configs';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';

const routes = [
    {
        component: <Login />,
        path: path.login,
        layout: null,
    },
    {
        component: <SignUp />,
        path: path.signup,
    },
    {
        component: <Home />,
        path: path.home,
    },
];

export default routes;
