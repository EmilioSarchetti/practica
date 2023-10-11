import React, { useState } from 'react';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación con usuario y contraseña
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;