import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './CurdApp/Home';
import Create from './CurdApp/Create';
import Update from './CurdApp/Update';
import Read from './CurdApp/Read';
function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Navigate to="/" />} /> 
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
