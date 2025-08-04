import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Register from './views/Register';
import Layout from './components/Layout/Layout';
import Perfil from './components/Perfil';
import Clientes from './components/clientes/Clientes';
import Suscripciones from './components/suscripciones/Suscripciones';
import Dashboard from './views/Dashborad';
import Rutinas from './components/rutinas/Rutinas';

import PrivateRoute from './components/routes/privateRoute';
import PublicRoute from './components/routes/publicRoute';

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
                    element={<PrivateRoute> <Layout /> </PrivateRoute>}
                >
                    <Route index element={<Dashboard/>}/>
                    <Route path='clientes' element={<Clientes/>}/>
                    <Route path='suscripciones' element={<Suscripciones/>}/>
                    <Route path='perfil' element={<Perfil/>}/>
                    <Route path='rutinas' element={<Rutinas/>} />
                </Route>

            </Routes>
        </Router>
    );
}

export default App;
