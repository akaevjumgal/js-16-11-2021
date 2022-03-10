import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css";
import FetchTodos from './component/fetchTodos';



function App() {
  
  
  return (
    <Routes>
      <Route index element={<FetchTodos />} />
      
  </Routes>
  );
}

export default App;
