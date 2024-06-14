import { useState } from 'react'
import Home from './pages/Home';

import { RouterProvider } from 'react-router-dom';
import Router from './routes/routes';
import AuthProvider from './provider/AuthProvider';

import 'bulma/css/bulma.min.css';
import './assets/css/style.css';


function App() {
  
  return (
    <AuthProvider>
        <RouterProvider router={Router} />
    </AuthProvider>
  )
}

export default App
