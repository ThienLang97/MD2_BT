import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Products from './products/Products.jsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      
    </Routes>
  )
}
