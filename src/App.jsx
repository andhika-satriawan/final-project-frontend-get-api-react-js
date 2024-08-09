import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import FormTambah from './pages/FormTambah'
import ProductDetailComponent from './component/ProductDetailComponent'
import FormEdit from './pages/FormEdit'
import PagesNotFound from './pages/PagesNotFound'
import AboutComponent from './component/AboutComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tambah' element={<FormTambah />} />
          <Route path="/product/:id" element={<ProductDetailComponent />} />
          <Route path="/update-product/:id" element={<FormEdit />} />
          <Route path='*' element={<PagesNotFound />} />
          <Route path='/about' element={<AboutComponent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
