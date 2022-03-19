import { createContext } from "react";

const initialValue = {
  bacons: [],
  setBacons: () => null,
}

const BaconContext = createContext(initialValue);

export default BaconContext