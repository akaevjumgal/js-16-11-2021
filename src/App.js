import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css";
import FetchTodos from './component/fetchTodos';
import LazyLoading from "./component/Lazy Loading/LazyLoading";



function App() {
  
  
  return (
    <Routes>
      <Route index element={<FetchTodos />} />
      <Route path="/Pokemon" element={<LazyLoading />} />
      
  </Routes>
  );
}

export default App;
