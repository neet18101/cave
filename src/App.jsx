import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Testing from './Pages/Testing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Testing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App