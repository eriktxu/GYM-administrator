import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './api/AuthContext'; 
import Login from './views/Login';
import Layout from './components/Layout/Layout';
import PerfilCliente from './components/Perfil';
import ClientesGimnasio from './components/clientes/Clientes';
import Suscripciones from './components/suscripciones/Suscripciones';
import Landing from './views/Landing';
import DashboardGimnasio from './views/Dashborad';
import DashboardCliente from './views/Dashboard-cliente';
import DashboardSuperadmin from './views/Dashboard-superadmin';
import DietaCliente from './components/dieta/Dieta';

import PrivateRoute from './components/routes/privateRoute';
import PublicRoute from './components/routes/publicRoute';

function LoadingScreen() {
    // Puedes hacer este componente tan bonito como quieras (ej. un spinner)
    return (

    );
}

function ApplicationRoutes() {
    // 2. Usamos el hook para obtener el estado de carga
    const { loading } = useAuth();

    // 3. Si está cargando, mostramos la pantalla de carga
    if (loading) {
        return <LoadingScreen />;
    }

    // 4. Cuando termina de cargar, mostramos las rutas
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/" element={<Navigate to="/login" replace />} />
             <Route path='/landing' element={<PublicRoute> <Landing/> </PublicRoute>}/>

            {/* Rutas privadas (esto queda igual) */}
            <Route element={<PrivateRoute allowedRoles={[1]} />}>
                <Route path="/cliente" element={<Layout><DashboardCliente /></Layout>} />
                <Route path="/cliente/perfil" element={<Layout><PerfilCliente /></Layout>} />
                <Route path="/cliente/dieta" element={<Layout><DietaCliente /></Layout>} />
            </Route>

            <Route element={<PrivateRoute allowedRoles={[2]} />}>
                <Route path="/gimnasio" element={<Layout><DashboardGimnasio /></Layout>} />
                <Route path="/gimnasio/clientes" element={<Layout><ClientesGimnasio /></Layout>} />
                <Route path="/gimnasio/suscripciones" element={<Layout><Suscripciones /></Layout>} />
            </Route>

            <Route element={<PrivateRoute allowedRoles={[3]} />}>
                <Route path="/superadmin" element={<Layout><DashboardSuperadmin /></Layout>} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

function App() {
  return (
    // 5. Envuelve todo con el Router y luego con el AuthProvider
    <Router>
      <AuthProvider>
        <ApplicationRoutes />
      </AuthProvider>
    </Router>
  );
}


export default App;
