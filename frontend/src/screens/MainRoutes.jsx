import React from 'react'
import {Routes,Route} from "react-router-dom"
import CartScreen from './CartScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import ProductScreen from './ProductScreen'
import RegisterScreen from './RegisterScreen'
const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/"  element={<HomeScreen/>} exact />
    <Route path={`/product/:id`}  element={<ProductScreen/>}  />
    <Route path={`/cart/:id`} element={<CartScreen/>} />
    <Route path={`/cart`} element={<CartScreen/>} />
    <Route path={`/login`} element={<LoginScreen/>} />
    <Route path={`/register`} element={<RegisterScreen/>} />
    </Routes>
  )
}

export default MainRoutes