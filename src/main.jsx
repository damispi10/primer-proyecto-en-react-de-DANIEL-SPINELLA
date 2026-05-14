import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(



  <BrowserRouter>

    <CartProvider> {/* Envolvemos la App */}
      <App />
    </CartProvider>
  </BrowserRouter>
)