import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Admin from './views/Admin';
import Perfil from './views/Perfil';
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";

function App() {
    return (
        <Router>
            <Routes>
                {/* Rutas públicas protegidas */}
                <Route
                    path="/"
                    element={ <PublicRoute> <Login /> </PublicRoute>}
                />

                <Route
                    path="/registro"
                    element={<PublicRoute> <Register /> </PublicRoute>}
                />
                

                {/* Rutas privadas */}
                <Route
                    path="/administracion"
                    element={<PrivateRoute> <Admin /> </PrivateRoute>}
                />

                <Route
                    path="/perfil"
                    element={<PrivateRoute> <Perfil /> </PrivateRoute>}
                />
            </Routes>
        </Router>
    );
}

export default App;
