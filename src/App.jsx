import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Testing from './Pages/Testing';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/home' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App