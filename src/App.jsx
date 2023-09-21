import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/ErrorPage/Error'
import Products from './Pages/Product/Products'

function App() {

  return (
    <>
    <Navbar/>
    {/* <div className='p-10 border-2 border-black grid grid-cols-3'>
      <Card/>
    </div> */}
    <Routes>
      <Route index element={<Body/>}/>
      <Route path='/about' element={<Body/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    <Footer/>





    </>
  )
}

export default App
