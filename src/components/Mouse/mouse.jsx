
import { useState } from 'react';
export default function Mouse ({ renderFunction }) {
    const [state, setState] = useState({x: 0, y: 0});

    function mouseMove (e) {
        // console.dir(e)
        setState({
            y: e.clientY,
            x: e.clientX
        })
    }
    return(
        <div style={{width: '100%', height: '100vh'}} onMouseMove={mouseMove}>
            {renderFunction(state)}
        </div>
    )
}