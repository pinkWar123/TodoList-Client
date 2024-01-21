import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '~/routes';
import MainLayout from './components/Layout/MainLayout';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        let Layout = MainLayout;
                        if (route.layout === null) Layout = Fragment;
                        const Element = <Layout>{route.component}</Layout>;
                        return <Route element={Element} path={route.path} key={index}></Route>;
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
