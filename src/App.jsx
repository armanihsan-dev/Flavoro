import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Success from './pages/Success';
import Error from './pages/Error';
import Home from './pages/Home';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Success',
    element: <ProtectedRoute element={<Success />} />,
  },

  {
    path: '/*',
    element: <Error />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
