import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './styles.css';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
    },
  ],
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
