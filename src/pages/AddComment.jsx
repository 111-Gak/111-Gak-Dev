import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Axios from "axios";

import styled from "styled-components";



export default function AddComment (){
    const { postId }= useParams();
    const [comment, setComment] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [targetId, setTargetId] = useState(null);
    const [editComment, setEditComment] = useState({
    title: "",
  });
    
    const onClickDeleteButtonHandler = (postId) => {
        Axios.delete(`http://localhost:3001/comments/${postId}`);
      };

      const onClickEditButtonHandler = (postId, edit) => {
        Axios.patch(`http://localhost:3001/comments/${postId}`, edit);
      };

    const fetchPosts = async () => {
        let data; 
        console.log(postId)
        try {
            data = await Axios.get("http://localhost:3001/comments?postId="+postId)
            // data = await axios.get("http://localhost:3001/comments?postId=tMwTvqPQ76")
        } catch (err) {
            console.log(err)
        } finally {
            console.log(data);
            setComment(data.data)
            setLoaded(true)
        }
    }
    useEffect(()=>{
        fetchPosts()
    }, [loaded])
    
    // console.log(comment)
    
    return (
        <>

        <Addcomment>
        {loaded && comment.map(comment => {
            return (
            <CommentStyle key={comment.postId}>
                <div><UserStyle>작성자:{comment.commentUsername}</UserStyle></div>
                <div><ContentStyle>댓글내용:{comment.commentText}</ContentStyle></div>
                <div>
                    <button type="button" onClick={() => onClickDeleteButtonHandler(comment.id)}>❌</button>
                    <input
            type="text"
            placeholder="입력"
            onChange={(ev) => {
              setTargetId(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="댓글수정"
            onChange={(ev) => {
              setEditComment({
                ...editComment,
                title: ev.target.value,
              });
            }}
          />
                    <button type="button" onClick={() => onClickEditButtonHandler(postId, editComment)}>✍🏼'</button>
                </div>
            </CommentStyle>


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
        flex-flow: row;
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
    
`;
const CommentStyle = styled.div`
    /* background-color: gray; */
    /* width: 1000px;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 20px; */
    
`;

const UserStyle = styled.div`
    border: 0.5px solid lightgray;
    width: 100px;
    height: 50px;
`;

const ContentStyle = styled.div`
    border: 0.5px solid lightgray;
    width: 300px;
    height: 50px;
`;
