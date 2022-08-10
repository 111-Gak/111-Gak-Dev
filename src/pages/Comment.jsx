import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {__deleteComment, __updateComment} from "../store/modules/comments"
import  Button  from "../components/Button"


import {
  clearComment,
  globalEditModeToggle,
  __getComment,
} from "../store/modules/comment";

const Comment = ({ comment }) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedComment, setUpdatedComment] = useState("");

  const { content } = useSelector((state) => state.comment.data);
  const { isGlobalEditmode } = useSelector((state) => state.comment);

  const onDeleteButtonHandler = () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteComment(comment.id));
    } else {
      return;
    }
  };

  const onUpdateButtonHandler = () => {
    dispatch(
      __updateComment({
        id: comment.id,
        content: updatedComment,
        username: comment.username,
        todoId: id,
      })
    );
    setIsEdit(false);
    dispatch(globalEditModeToggle(false));
  };

  const onChangeEditButtonHandler = () => {
    setIsEdit(true);
    dispatch(__getComment(comment.id));
    dispatch(globalEditModeToggle(true));
  };

  const onCancelButtonHandler = () => {
    setIsEdit(false);
    dispatch(clearComment());
    dispatch(globalEditModeToggle(false));
  };

  useEffect(() => {
    setUpdatedComment(content);
  }, [content]);

  return (
    <StComment>
      {isEdit ? (
        <>
          <StInputWrapper>
            <input
              type="text"
              value={updatedComment}
              maxlength={100}
              onChange={(event) => {
                setUpdatedComment(event.target.value);
              }}
            />
          </StInputWrapper>
          <StControlGroup>
            <Button
              size="small"
              bgColor="#FE531F"
              onClick={onCancelButtonHandler}
            >
              <p color="#fff">취소</p>
            </Button>
            <Button
              size="small"
              bgColor="#FE531F"
              onClick={onUpdateButtonHandler}
            >
              <p color="#fff">저장</p>
            </Button>
          </StControlGroup>
        </>
      ) : (
        <>
          <StInputWrapper>
            <p>{comment.username}</p>
            <p size="16">{comment.content}</p>
          </StInputWrapper>

          <StControlGroup>
            <Button
              size="small"
              bgColor="#FE531F"
              disabled={isGlobalEditmode}
              onClick={onChangeEditButtonHandler}
            >
            </Button>
            <Button
              size="small"
              bgColor="#FE531F"
              onClick={onDeleteButtonHandler}
              disabled={isGlobalEditmode}
            >
            </Button>
          </StControlGroup>
        </>
      )}
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  
  justify-content: "space-between";
  border-bottom: 1px solid #eee;
  height: 70px;
  padding: 0 12px;
`;

const StControlGroup = styled.div`
  flex-shrink: 0;
  gap: 3px;
`;

const StInputWrapper = styled.div`
  width: 70%;
`;
