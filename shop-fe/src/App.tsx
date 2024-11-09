import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layouts } from './components/layouts';
import NotFound from './pages/NotFound';
import { publicRoutes, privateRoutes } from './routes';
import { AdminLayout } from './components/AdminLayout';
const isAuthenticated = () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
        return true;    
    }
    return false;
};

function App() {
    const userIsAuthenticated = isAuthenticated();
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={<Layouts>{route.component}</Layouts>} />
                    ))}
                    {privateRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                userIsAuthenticated ? (
                                    <AdminLayout>{route.component}</AdminLayout>
                                ) : (
                                    <Navigate to="/login" replace />
                                )
                            }
                        />
                    ))}
                    <Route path='*' element={<Layouts><NotFound /></Layouts>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
