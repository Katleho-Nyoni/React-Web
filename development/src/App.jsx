import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import './App.css'
import Layout from './layout'
import HomePage from './homePage'
import AboutPage from './aboutPage'
import ContactPage from './contactPage'
import ProjectPage from './projectPage'

const routes = [
  { path: '/', element: <Layout />,
  children: [
  {path: '/', element: <HomePage />},
  {path: '/about', element: <AboutPage />},
  // {path: '/contact', element: <ContactPage />},
  {path: '/projects', element: <ProjectPage />},
  {path: '/katieum', element: <KatieumPage />},
  {path: '/products', element: <ProductsPage />},
  ],},
];

// const routes = [
//   {path: '/', element: <HomePage />},
//   {path: '/about', element: <AboutPage />},
//   {path: '/contact', element: <ContactPage />},
//   {path: '/projects', element: <ProjectPage />},
// ];



const router = createBrowserRouter(routes);

export default function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

