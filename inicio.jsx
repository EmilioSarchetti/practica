import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a Mi Aplicación</h1>
      <p>Por favor, inicia sesión o regístrate para continuar:</p>
      <div>
        <Link to="/componentes/login">Iniciar sesión</Link>
      </div>
      <div>
        <Link to="/componentes/registro">Regístrate</Link>
      </div>
    </div>
  );
}

export default Inicio;