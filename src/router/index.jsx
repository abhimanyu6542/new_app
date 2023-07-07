import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../feature/about';
import Contact from '../feature/contact';
import Home from '../feature/home/index';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import TryNow from '../feature/try-now/TryNow';
import ProductHomePage from '../feature/product/page/ProductHomePage';
import ProductPricingPage from '../feature/product/page/ProductPricingPage';
import ProductFeaturePage from '../feature/product/page/ProductFeaturePage';
import ProductUseCasePage from '../feature/product/page/ProductUseCasePage';
import NotFoundPage from '../components/NotFoundPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />, 
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: ':productName',
            children: [
              {
                path: '',
                element: <ProductHomePage />
              },
              {
                path: 'pricing',
                element: <ProductPricingPage />
              },
              {
                path: 'feature',
                element: <ProductFeaturePage />
              },
              {
                path: 'use-case/:name',
                element: <ProductUseCasePage />
              }
            ]
          },
          {
            path: 'try-now',
            element: <TryNow />,
          },
          {
            path: '404',
            element: <NotFoundPage />
          }
        ],
      },
    ],
  }
]);

export default router;
