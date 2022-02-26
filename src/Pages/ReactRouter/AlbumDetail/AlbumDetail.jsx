import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AlbumPhoto.css'

export default function AlbumDetail () {
    const [photoAlbum, getPhotoAlbum] =useState([]);
    const { albumId } = useParams ();
    console.log(albumId)

    async function fetchPhotos () {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        const result = await response.json();
        getPhotoAlbum(result);
    }

    useEffect (() => {fetchPhotos()}, [])
    console.log(photoAlbum);
    return (
        <section className="container">
            <h3>{`Album №${albumId}`}</h3>
            <Link to='/albums'><button>Back to albums</button></Link>
            <div className='photo-album'>
            {photoAlbum.map((photo) => {
                return (
                    <img key={`photo${photo.id}`} src={photo.url} alt={`img${photo.id}`} />
                )
            })}
            </div>
        </section>
    )
}