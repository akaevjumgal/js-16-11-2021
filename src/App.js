import { CircularProgress, LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const MainPage = lazy(() => import("./Pages"));
const BaconDetailsPage = lazy(() => import("./Pages/BaconDetailsPage"));
const BaconPage = lazy(() => import("./Pages/BaconPage"));
const CounterPage = lazy(() => import("./Pages/CounterPage"));
const RequestPage = lazy(() => import("./Pages/RequestPage"));

function App() {
  return (
    <Suspense fallback={<LinearProgress variant="indeterminate" />}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="bacon" element={<BaconPage />} />
        <Route path="bacon/:baconId" element={<BaconDetailsPage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="requests" element={<RequestPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
