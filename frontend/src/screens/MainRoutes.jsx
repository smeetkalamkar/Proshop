import React from 'react'
import {Routes,Route} from "react-router-dom"
import CartScreen from './CartScreen'
import HomeScreen from './HomeScreen'
import ProductScreen from './ProductScreen'
const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/"  element={<HomeScreen/>} exact />
    <Route path={`/product/:id`}  element={<ProductScreen/>}  />
    <Route path={`/cart/:id`} element={<CartScreen/>} />
    <Route path={`/cart`} element={<CartScreen/>} />
    </Routes>
  )
}

export default MainRoutes