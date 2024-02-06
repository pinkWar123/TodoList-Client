import { path } from '~/configs';
import Completed from '~/pages/Completed';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Today from '~/pages/Today';
import Upcoming from '~/pages/Upcoming';

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
        component: <Today />,
        path: path.today,
    },
    {
        component: <Completed />,
        path: path.completed,
    },
    {
        component: <Upcoming />,
        path: path.upcoming,
    },
    {
        component: <Today />,
        path: path.wildcard,
    },
    {
        component: <Today />,
        path: path.home,
    },
];

export default routes;
