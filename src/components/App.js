import Card from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from '../auth/components/AuthLayout';
import PokemonLayout from "./Layout";
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='login' element={<AuthLayout />} />
  <Route path="/" element={<PokemonLayout/>}></Route>
  
  </Routes>

    
    </BrowserRouter>
    </div>
  );
}

export default App;
