import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
fetch('/data/productos.json')
  .then(respuesta => {
    console.log('Respuesta cruda del servidor:', respuesta);
    return respuesta.json();
  })
  .then(datos => {
    console.log('¡Productos cargados!', datos);
  })
  .catch(error => {
    console.error('¡Ups! Hubo un error:', error);
  })
  .finally(() => {
    console.log('Finalizó la petición');
  });
ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
)