

import DetailPost from "../components/DetailPost";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPage (){
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts")
        setPosts(data);
    };
    
    useEffect(()=>{
        fetchPosts()
        }, []);
        console.log(posts)

    return (

        <>
            {posts.map(post => <DetailPost list={post} key={post.postId}/>)}
        </>

    );
};

