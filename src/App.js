import React, { useState, useEffect } from "react";

function App() {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
        const result = await response.json()
        setPosts(result)      
    }
    
        useEffect(() => {
            fetchPosts()
            return () => {
                <div>
                    {[posts]}
                </div>
            }
        }, []) 
}

export default App;