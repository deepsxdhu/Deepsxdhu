import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './pages/home.jsx'
import Notfound from './pages/notfound.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
