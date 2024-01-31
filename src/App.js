import { Fragment, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import routes from '~/routes';
import MainLayout from './components/Layout/MainLayout';
import { useAuthContext } from './context';
import { profileRequest } from './services/requests';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const { setUser } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
            const user = await profileRequest.getUserProfile();
            if (!user) navigate('/login');
            else setUser(user.data);
        };
        fetchUser();
    }, [setUser, navigate]);
    return (
        <>
            <Routes>
                {routes.map((route, index) => {
                    let Layout = MainLayout;
                    if (route.layout === null) Layout = Fragment;
                    const Element = <Layout>{route.component}</Layout>;
                    return <Route element={Element} path={route.path} key={index}></Route>;
                })}
            </Routes>
            <ToastContainer autoClose={1000} position="bottom-right" />
        </>
    );
}

export default App;
