import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      //Agar navbar and footer chahiye toh 
    
   </Route>
   <Route path='/login' element={<Login/>}>

   </Route>
   </>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
