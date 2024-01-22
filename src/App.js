import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '~/routes';
import MainLayout from './components/Layout/MainLayout';
import { useAuthContext } from './context';
import { profileRequest } from './services/requests';
function App() {
    const { setUser } = useAuthContext();
    useEffect(() => {
        const fetchUser = async () => {
            const user = await profileRequest.getUserProfile();
            setUser(user.data);
        };
        fetchUser();
    }, [setUser]);
    return (
        <Routes>
            {routes.map((route, index) => {
                let Layout = MainLayout;
                if (route.layout === null) Layout = Fragment;
                const Element = <Layout>{route.component}</Layout>;
                return <Route element={Element} path={route.path} key={index}></Route>;
            })}
        </Routes>
    );
}

export default App;
