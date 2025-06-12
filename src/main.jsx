import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/router.jsx';
import AuthProviders from './Provider/AuthProviders.jsx';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
     <Toaster position="top-center" reverseOrder={false} />
    </AuthProviders>
  </StrictMode>
);
