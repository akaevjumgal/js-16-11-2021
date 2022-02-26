import { Link } from "react-router-dom"
import './Album.css'
export default function Album ({ album }) {
    console.log(album)
    return (
        <Link style={{textDecoration: 'none'}} to={`${album.id}`}>
        <div className="title-album">
            <h3>{`Album ${album.id}`}</h3>
            <p>{album.title}</p>
        </div>
        </Link>
    )
}