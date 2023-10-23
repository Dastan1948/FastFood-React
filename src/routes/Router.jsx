import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menus from '../pages/Menus'
import Orders from '../pages/Orders'
import Home from '../pages/Home'
import Basket from '../pages/Basket'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menus />} />
        <Route path='/order' element={<Orders />} />
        <Route path='/basket' element={<Basket />} />

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default Router