import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Marketplace from '../pages/Marketplace/Marketplace.jsx'
import Selling from '../pages/Selling/Selling.jsx'
import Product from '../pages/Product/Product.jsx'
import './App.css'



const router = createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Marketplace' element={<Marketplace/>}></Route>
      <Route path='/Selling' element={<Selling/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      {/* <Route path='/profile' element={<Profile/>}></Route> */}

      //Agar navbar and footer chahiye toh 
    
   </Route>
   
   <Route path='/login' element={<Login/>}></Route>
   
  </>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
