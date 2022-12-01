import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomeScreen from './HomeScreen'
import ProductScreen from './ProductScreen'
const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/"  element={<HomeScreen/>} exact />
    <Route path={`/product/:id`}  element={<ProductScreen/>}  />
    </Routes>
  )
}

export default MainRoutes