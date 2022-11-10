import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"
import { AuthContextProvider } from './Pages/Authentication/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
  </AuthContextProvider>
);

