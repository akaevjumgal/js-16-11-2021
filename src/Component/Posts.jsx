import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './fetching.css'


export default function Posts() {

    const [post, setPost] = useState([])
  
    async function fetchPost() {
      const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler.');
      const result = await response.json();
      setPost(result);
      console.log(result)
    }
  
    useEffect(() => {
      fetchPost()
    }, []);
  
  
    return (
      <div>
        <h1>Post</h1>
        <div className="container">
          {
            post.map((posts) => {
              return (
                <Link className="card" key={posts.split('')} to={`/${posts}`}>
                  <h2>{posts.split('.')[0]}</h2>
                </Link>
              )
            })
          }
        </div>
        <button onClick={() => fetchPost()} className="next">
          Next
        </button>
      </div >
    )
  }