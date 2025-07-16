import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import './App.css'
import Layout from './layout'
import HomePage from './homePage'
import AboutPage from './aboutPage'
import ContactPage from './contactPage'
import ProjectPage from './projectPage'
import Sandlana from './sandlana'
import SandlanaPoems from './sandlanaPoems'
import SignIn from './loginAccount'
import SignUp from './createAccount'
import DataGroup from './dataGroup'

const routes = [
  { path: '/', element: <Layout />,
  children: [
  {path: '/', element: <HomePage />},
  {path: '/about', element: <AboutPage />},
  {path: '/contact', element: <ContactPage />},
  {path: '/projects', element: <ProjectPage />},
  ],},
  {path: '/a/login', element: <SignIn />},
  {path: '/a/signup', element: <SignUp />},
  {path: '/datagroup', element: <DataGroup />},
  {path: '/sandlana', element: <Sandlana />},
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

