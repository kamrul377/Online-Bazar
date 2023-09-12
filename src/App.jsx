import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import FaqsPage from './pages/FaqsPage'

import ProductDetails from './pages/ProductDetails'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/help' element={<FaqsPage />} />
        <Route path='/product-details/:name' element={<ProductDetails />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </>
  )
}

export default App
