import { useEffect, useState } from "react";
import './fetchTodos.css'

export default function FetchTodos(){
   const [posts,setPost] = useState({})
    const fetchPost = async () => {
     const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
     const result = await response.json()
     setPost(result)
    }
    useEffect(()=> {
        fetchPost()
    },[])
     
  
    return (
        <div>
        <div className="container">
        <div className="Post_box">
            <h3>{[posts].toString().split('.')[0]}</h3>
        </div>
        <div className="Post_box">
            <h3>{[posts].toString().split('.')[1]}</h3>
        </div>
        <div className="Post_box">
            <h3>{[posts].toString().split('.')[2]}</h3>
        </div>
        <div className="Post_box">
            <h3>{[posts].toString().split('.')[3]}</h3>
        </div>
        <div className="Post_box">
            <h3>{[posts].toString().split('.')[4]}</h3>
        </div>
        </div>
            <button className="post_btn" onClick={()=> fetchPost()}>Next</button>
        </div>
    )
}