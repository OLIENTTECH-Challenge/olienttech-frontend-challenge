import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './router.tsx';
import { Toaster } from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
    <Toaster />
  </React.StrictMode>,
);
