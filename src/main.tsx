import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css';
import { createServerMirageJs } from './services/mirage';

// Chama a função que cria o servidor interno do miragejs
createServerMirageJs();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
