import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alboms from "./Alboms";


export default function Albom() {

  const [albom, setAlbom] = useState([]);
  

  async function albomFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const result = await response.json()
    setAlbom(result)
  }

  useEffect(() => {
    albomFetch()
  }, [])

  return (
    <div>
      <div>
        <Link to='/mouse'>Mouse</Link>
      </div>
      <div>
        {
          albom.map((albums) => {
            return (
              <Alboms key={albums.id} albums={albums} />
            )
          })
        }
      </div>
    </div>

  )
}