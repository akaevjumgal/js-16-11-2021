import { Card, CardContent, CardHeader, Fab, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query"

const BASE_URL = 'https://my-json-server.typicode.com/typicode/demo/posts'

const fetchPosts = async () => {
  const posts = await fetch(BASE_URL);
  const result = await posts.json()

  return result
}


const getPostById = async (id) => {
  const posts = await fetch(`${BASE_URL}/${id}`);
  const result = await posts.json()

  console.log(result);
}

const createPost = async ({ ...post }) => {
  const posts = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(post)
  });
  const result = await posts.json()
  getPostById(result.id)
}

export default function RequestPage() {
  const { isLoading, data } = useQuery('fetchPosts', () => fetchPosts())

  if (isLoading) return <div>Loading ...</div>
  console.log(data);
  return (
    <Grid gap={2} container columns={4}>
      {data.map((post) => (
        <Grid item key={post.id}>
          <Card style={{ width: 300, height: 150 }}>
            <Typography>{post.title}</Typography>
            {/* <CardContent>{post.body}</CardContent> */}
          </Card>
        </Grid>
      ))}
      <Fab onClick={() => createPost({ title: 'Codify' })}>
        Post
      </Fab>
    </Grid>
  )
}