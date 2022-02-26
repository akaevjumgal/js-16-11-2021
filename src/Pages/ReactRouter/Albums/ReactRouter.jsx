import { useEffect, useState } from "react";
import Album from "./components/Album";

export default function ReactRouter () {

    const [albums, getAlbums] = useState([]);

    async function fetchAlbums () {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const result = await response.json();
        getAlbums(result);
    }

    useEffect (() => {fetchAlbums()}, [])
    return (
        
        <section className="container">
            <h1>Albums</h1>
            {albums.map((album) => {return(
                <Album key={album.id} album={album} />
            )})}
        </section>
    );
}