import { useState } from "react";
import Toast from "./Toast";

export default function Select() {
  const [Selected, setSelected] = useState(0);

  return (
    <div className="select">
      <select onChange={e => setSelected(e.target.selectedIndex)}>
        <option>Success</option>
        <option>Error</option>
        <option>Info</option>
        <option>Warning</option>
      </select>
      <Toast index={Selected} />
    </div>
  )
}