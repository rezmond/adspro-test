import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ProductListPage, ProductPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/products" replace />,
  },
  {
    path: '/products',
    element: <ProductListPage />,
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
  },
]);
