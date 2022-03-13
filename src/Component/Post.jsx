import { useNavigate, useParams } from "react-router-dom"
import './fetch.css'

export default function Post() {

    const { posts    } = useParams()
    const back = useNavigate()
  
    return (
      <div>
        <div className="post">
          <h3>{posts}</h3>
          <button onClick={() => back(-1)} className="back">Back</button>
        </div>
      </div>
    )
  }