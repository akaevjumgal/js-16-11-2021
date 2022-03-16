import { useState } from "react";
import Cat from '../RenderProps/Cat'
import ThemeButton from "../ThemeButton/ThemeButton";

export default function Mouse() {

  const [state, setState] = useState({ x: 0, y: 0 })

  function handleMouseMove(event) {
    setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <Cat x={state.x} y={state.y} />
    </div>
  )
}