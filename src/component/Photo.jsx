import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../component/Photo.css"


export default function PhotoAlbom() {

  const { albumId } = useParams()
  const [Photo, setPhoto] = useState([])


  async function fetchPhoto() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    const result = await response.json()
    setPhoto(result)
  }

  useEffect(() => {
    fetchPhoto()
  }, []);

  return (
    <div >
      <div className="card">
        {
          Photo.map((photos) => {
            return (
              <img key={photos.id} src={photos.url} alt="photo" />
            )
          })
        }
      </div>
      <div>
        <Link to='/'><button className="back">Back</button></Link>
      </div>
    </div>
  )
}
