import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ContactUs from './Pages/ContactUs.jsx'
import Hero from './Pages/Hero.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import { AuthProvider } from './context/Context.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    errorElement : "404 not found",
    children : [
      {
        path : '/',
        element : <Hero />
      },
      {
        path : '/contact',
        element : <ContactUs />
      },
      {
        path : '/services',
        element : <ServicesPage />
      },
      {
        path : '/about',
        element : <AboutUs />
      },
     
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
