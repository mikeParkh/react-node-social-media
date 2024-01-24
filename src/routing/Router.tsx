import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseLayout } from 'components';
import * as Pages from 'pages';

const publicRoutes = [
  {
    path: '/',
    element: <Pages.Home />
  },
  {
    path: '/profile',
    element: <Pages.ProfilePage />
  }
]

const authRoutes = [
  {
    path: 'login',
    element: <></>
  },
  {
    path: 'sign-up',
    element: <></>
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: publicRoutes
  },
  {
    path: '/auth',
    element: <></>, // <AuthLayout />
    children: authRoutes
  }
])

const Router = () => (
  <RouterProvider router={router} />
)

export default Router