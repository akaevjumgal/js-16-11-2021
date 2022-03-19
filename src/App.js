import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages";
import BaconDetailsPage from "./Pages/BaconDetailsPage";
import BaconPage from "./Pages/BaconPage";
import CounterPage from "./Pages/CounterPage";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="bacon" element={<BaconPage />} />
      <Route path="bacon/:baconId" element={<BaconDetailsPage />} />
      <Route path="counter" element={<CounterPage />} />
    </Routes>
  );
}

export default App;
