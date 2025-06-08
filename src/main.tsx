import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Eklendi
import App from './App.tsx';
import './index.css'; // Veya ana stil dosyanızın adı

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Eklendi */}
      <App />
    </BrowserRouter> {/* Eklendi */}
  </React.StrictMode>
);