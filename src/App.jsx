import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'

function App() {

  return (
    <BrowserRouter basename='/facebook'>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
