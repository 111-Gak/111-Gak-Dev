import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../store/modules/comments";
// import Button from "../components/Button"
import TextInputBox from "../components/TextInputBox";


const AddCommentForm = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    username: "",
    content: "",
  });

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (comment.content.trim() === ""  || comment.username.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__addComment({ todoId: id, ...comment }));
    setComment({
      username: "",
      content: "",
    });
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <StForm onSubmit={onAddCommentButtonHandler}>
      <StNameInput>
        <TextInputBox
          placeholder="이름"
          value={comment.username}
          type="text"
          name="username"
          onChange={onChangeInputHandler}
        />
      </StNameInput>
      <TextInputBox
        placeholder="댓글을 입력하세요"
        value={comment.content}
        name="content"
        type="text"
        onChange={onChangeInputHandler}
      />
      <button type="submit" onClick={onAddCommentButtonHandler}>
        추가하기
      </button>
    </StForm>
  );
};


const StNameInput = styled.div`
  width: 150px;
`;

const StForm = styled.form`
  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;

export default AddCommentForm;

