import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages";
import BaconDetailsPage from "./Pages/BaconDetailsPage";
import BaconPage from "./Pages/BaconPage";
import CounterPage from "./Pages/CounterPage";
import RequestPage from "./Pages/RequestPage";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="bacon" element={<BaconPage />} />
      <Route path="bacon/:baconId" element={<BaconDetailsPage />} />
      <Route path="counter" element={<CounterPage />} />
      <Route path="requests" element={<RequestPage />} />
    </Routes>
  );
}

export default App;
