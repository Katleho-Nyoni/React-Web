import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import './App.css'
import Layout from './layout'
import HomePage from './homePage'
import AboutPage from './aboutPage'
import ProjectPage from './projectPage'
import KatieumPage from './katieumPage'
import ProductsPage from './prodPage'

const routes = [
  { path: '/', element: <Layout />,
  children: [
  {index: true, element: <HomePage />},
  {path: '/about', element: <AboutPage />},
  {path: '/projects', element: <ProjectPage />},
  {path: '/katieum', element: <KatieumPage />},
  {path: '/products', element: <ProductsPage />},
  ],},
];

const router = createBrowserRouter(routes);

export default function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

