import React from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import AddComment from "./AddComment"
import { useParams } from "react-router-dom"

import styled from "styled-components";
import Button from "../components/Button";
import TextInputBox from "../components/TextInputBox";

const Comment = () => {
    const { postId }= useParams();

   
    // const navigate = useNavigate();
    const comment = useSelector(state => state.comments.comment);
    const onSubmitHandler = (e) => {
    e.preventDefault();
    

    const newComment = {...comment, postId: postId};
    Axios.post("http://localhost:3001/comments/", newComment)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    };

    return (
        <CommentLayout onSubmit={(e) =>{
            e.preventDefault();
            onSubmitHandler(e)}}
            >
            <InputGroupStyle>
            <TextInputBox 
            name={'commentUsername'} 
            placeholder={'작성자'}
            max={20}
            required
            />
            <TextInputBox 
            name={'commentText'} 
            placeholder={'내용'}
            max={100}
            required
            />
            </InputGroupStyle>
            <Button 
            buttonText={'✔️'}/>
            
            <div>
            <AddComment key={comment.id}/>
            </div>
        </CommentLayout>
    )
};
const CommentLayout = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InputGroupStyle = styled.div`
    display: flex;

`
export default Comment;