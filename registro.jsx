import React, { useState } from 'react';

function Registro() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    contrasena: '',
    correo: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleRegistro = () => {
    fetch('http://localhost:3000/componentes/registro', { // Cambia la URL según tu configuración
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.status === 201) {
          // El usuario se registró con éxito, puedes redirigir a otra página
          // o mostrar un mensaje de éxito aquí
        } else {
          // Maneja errores o muestra un mensaje de error
          console.error('Error en el registro');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Registro</h1>
      <form>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contrasena"
            value={usuario.contrasena}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="text"
            name="correo"
            value={usuario.correo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleRegistro}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registro;