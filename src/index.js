import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './pages/App/App';
import Portal from './pages/Portal/Portal';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AboutPage from './pages/AboutPage/AboutPage';
// import JournalPage from './pages/JournalPage/JournalPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <AboutPage />
  },
  {
    path: "portal",
    element: <Portal />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
