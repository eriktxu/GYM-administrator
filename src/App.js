import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Admin from './views/Admin';
import Perfil from './views/Perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/registro' element={<Register/>}/>
        <Route path='/administracion' element={<Admin/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
    </Router>
  );
}

export default App;
