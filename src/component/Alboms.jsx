import { Link } from "react-router-dom";


export default function Alboms({ albums }) {

  return (
    <div>
      <Link to={`${albums.id}`}>
        <div>
          <h2>{albums.title}</h2>
        </div>
      </Link>
    </div >
  )
}