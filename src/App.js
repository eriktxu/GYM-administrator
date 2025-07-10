import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Register from './views/Register';
import Admin from './views/Admin';
import Perfil from './views/Perfil';
import Clientes from './components/Clientes';
import Suscripciones from './components/Suscripciones';

import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";

function App() {
    return (
        <Router>
            <Routes>
                {/* Rutas públicas protegidas */}
                <Route
                    path="/"
                    element={<PublicRoute> <Login /> </PublicRoute>}
                />

                <Route
                    path="/registro"
                    element={<PublicRoute> <Register /> </PublicRoute>}
                />


                {/* Rutas privadas */}
                <Route
                    path="/administracion"
                    element={<PrivateRoute> <Admin /> </PrivateRoute>}
                >
                    <Route index element={<h3>Inicio</h3>}/>
                    <Route path='clientes' element={<Clientes/>}/>
                    <Route path='suscripciones' element={<Suscripciones/>}/>
                    <Route path='perfil' element={<Perfil/>}/>
                </Route>

            </Routes>
        </Router>
    );
}

export default App;
