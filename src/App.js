import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaconContext from "./bacon.context";
import MainPage from "./Pages";
import BaconDetailsPage from "./Pages/BaconDetailsPage";
import BaconPage from "./Pages/BaconPage";

function App() {
  const [bacons, setBacons] = useState([]);

  return (
    <BaconContext.Provider value={{ bacons, setBacons }}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="bacon" element={<BaconPage />} />
        <Route path="bacon/:baconId" element={<BaconDetailsPage />} />
      </Routes>
    </BaconContext.Provider>
  );
}

export default App;
