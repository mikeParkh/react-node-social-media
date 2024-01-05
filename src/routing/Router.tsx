import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: 'profile/:userId',
    element: <Root />
  }
])

const Router = () => (
  <RouterProvider router={router} />
)

export default Router