
import './App.css'
import ResponsiveAppBar from '../pages/home'

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Test from '../pages/test'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<ResponsiveAppBar/>}/>
          <Route path='/:login/1' element={<Login/>}/>
          <Route path='/:test/2' element={<Test/>}/>
        </Routes>
      </BrowserRouter>  */}
      <Header/>
   </>

  )
}

export default App
