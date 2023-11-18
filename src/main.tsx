import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './router.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
