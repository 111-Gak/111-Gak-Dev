import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

import styled from "styled-components";
// import Comment from "./Comment";
export default function AddComment (){
    const postId = useParams('postId').commentId;

    const [comment, setComment] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
  


    

    const fetchPosts = async () => {
        let data;
        try {
            data = await axios.get("http://localhost:3001/posts?postId="+postId)
        } catch (err) {
            console.log(err)
        } finally {
            console.log(data)
            setComment(data.data)
            setLoaded(true)
        }
    }
    useEffect(()=>{
        fetchPosts()
    }, [loaded])
    
    
    return (
        <>

        <Addcomment>
        {loaded && comment.map(comment => {
            return (
            <div key={comment.id}>
            sdfsdfsdfsdfs
            list={{...comment}} 
            key={comment.postId}
            </div>

            )
                })
            }

        </Addcomment>
        </>
        
    );
};

const Addcomment = styled.div`
    & > div {
        /* background: red; */
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
    
`

