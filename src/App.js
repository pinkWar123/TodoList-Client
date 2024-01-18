import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '~/routes';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {routes.map((route, index) => (
                        <Route element={route.component} path={route.path} key={index}></Route>
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
