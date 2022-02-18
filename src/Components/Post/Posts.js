import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts() {

  const [Posts, setPosts] = useState([{ id: 1, title: '', body: '' }])

  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    setPosts(result);

  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {Posts.map((post) => {
        return (
          <Post key={post.id} title={post.title} body={post.body} />
        )
      })}
    </div>
  )
}