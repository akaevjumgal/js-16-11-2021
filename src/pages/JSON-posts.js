import { Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        setPosts(result)
    }

    useEffect(()=> {
        fetchPosts()
    },[])

    return (
        <div style={{ padding: '1rem' }}>
        {posts.map((post) =>
            <Link key={post.id} to={`/materialpage/${post.id}`}>
                <Card style={{ margin: '0.5rem 0', padding: '0 0.5rem' }}>
                    <CardContent>
                        <Typography variant="body1">{post.title}</Typography>
                        <Typography variant="caption">{post.body}</Typography>
                    </CardContent>
                </Card>
            </Link>
        )}
    </div>
    )
}