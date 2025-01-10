import { StrictMode, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import { lazy } from 'react';
// import ProductList from './components/ProductList.jsx';
// import ProductDetail from './components/ProductDetail.jsx';
// import Cart from './components/Cart.jsx';
// import Error from './components/Error.jsx';
// import CartItem from './components/CartItem.jsx';

//lazy loading for optimisation purposes
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const CartItem = lazy(() => import('./components/CartItem.jsx'));
const Error = lazy(() => import('./components/Error.jsx'));


const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement:
    <Suspense fallback={<div>Loading...</div>}>
        <Error />
    </Suspense>,
    children: [
      {
        path: "/",
        element:(
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList/>, 
        </Suspense> 
        ),
      },
      {
        path: "/products",
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList/>, 
          </Suspense> 
          ), 
      },
      {
        path: "/product/:id", // Dynamic route for product details
        element:(
          <Suspense fallback={<div>Loading...</div>}> 
            <ProductDetail />,
          </Suspense> 
          ),
      },
      {
        path: "/cart",
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <Cart /> 
          </Suspense> 
          ), 
      },
      {
        path: "/cart/:itemId", // Dynamic route for a specific cart item
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <CartItem /> 
          </Suspense> 
          ), 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
