import { useEffect, useState } from "react";
import './fetchTodos.css'

export default function FetchTodos(){
   const [posts,setPost] = useState([])
    const fetchPost = async () => {
     const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
     const result = await response.json()
     setPost(result)
    }
    useEffect(()=> {
        fetchPost()
        
    },[])
    console.log(posts)
     
  
    return( <div>
        
        <div className="container">
        {posts.map((post)=> (

            <div className="Post_box">
                {post.split('.' )[0]}
            </div>
        ))}
        </div>
            <button className="post_btn" onClick={()=> fetchPost()}>Next</button>
        </div>)
    
}