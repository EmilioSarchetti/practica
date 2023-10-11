import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Inicio from './componentes/inicio';
import Login from './componentes/login';
import Registro from './componentes/registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/componentes/inicio" element={<Inicio />} />
        <Route path="/componentes/login" element={<Login />} />
        <Route path="/componentes/registro" element={<Registro />} />
        {/* Otras rutas de tu aplicación */}
      </Routes>
    </Router>
  );
}

export default App;