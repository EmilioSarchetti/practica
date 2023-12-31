import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import App from './App';

const root = createRoot(document.getElementById('root')); // Crea un root con tu elemento raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);