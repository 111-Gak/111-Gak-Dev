import { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post"

export default function CommunityPage() {
    const [posts, setPosts] = useState([]);
    
    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts")
        
        setPosts( data );
    }
    
    useEffect(()=>{
        fetchPosts()
    }, [])

    return (
        <>
            {posts.map(post => {
                return <Post 
                list={{...post}} 
                key={post.postId}
                />
            })}
        </>
    )
}