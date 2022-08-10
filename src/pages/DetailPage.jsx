import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

import Post from "../components/Post";
import Comments from "./Comments";
import styled from "styled-components";

export default function DetailPage (){
    const postId = useParams('postId').postId;
    console.log(postId);

    const [post, setPost] = useState([]);
    const fetchPost = async () => {
        const { data } = await axios.get("http://localhost:3001/posts?postId="+postId)

        setPost(...data);
    };
    
    useEffect(()=>{
        fetchPost()
    }, []);

    return (
        <>
        <Detail>
            <Post list={{...post}} key={post.postId} />
            
        </Detail>
        <Comments />
        </>
    );
};

const Detail = styled.div`
    & > div {
        padding-top: 40px;
        flex-flow: column;
        position: relative;
    }
    .post-header {
        width: 100%;
        flex: 1 1 auto;
        text-align: center;
    }
    .post-title {
        margin: 10px 0 20px;
        font-size: 30px;
    }
    .post-body > *:first-child {
        position: absolute;
        top: 1em;
        width: calc(100% - 2em);
    }
`