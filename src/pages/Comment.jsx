import React from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import AddComment from "./AddComment"

import styled from "styled-components";
import Button from "../components/Button";
import TextInputBox from "../components/TextInputBox";

const Comment = () => {
    const newPostId = nanoid(10);
    // const navigate = useNavigate();
    const comment = useSelector(state => state.comments.comment);
    const onSubmitHandler = (e) => {
    e.preventDefault();
    

    const newComment = {...comment, postId: newPostId};
    Axios.post("http://localhost:3001/comments/", newComment)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    };

    return (
        <CommentLayout onSubmit={(e) => onSubmitHandler(e)}>
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
            buttonText={'추가하기'}/>
            <div>
                ㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ
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