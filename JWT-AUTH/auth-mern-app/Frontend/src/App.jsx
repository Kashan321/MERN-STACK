import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from "../src/Components/Login"
import Signup from "../src/Components/Signup"
import Home from "../src/Components/Home"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App