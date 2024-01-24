import { path } from '~/configs';
import TaskProvider from '~/context/TaskContext/TaskProvider';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Today from '~/pages/Today';

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
        component: (
            <TaskProvider>
                <Today />
            </TaskProvider>
        ),
        path: path.today,
    },
];

export default routes;
