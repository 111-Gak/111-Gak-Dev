import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getCommnetsByPostId } from "../store/modules/comments";

import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";



const Comments = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [isShow, setisShow] = useState(false);
  const { data } = useSelector((state) => state.comments.commentsByPostId);

  useEffect(() => {
    if (isShow) {
      dispatch(__getCommnetsByPostId(id));
    }
  }, [dispatch, id, isShow]);

  return (
    <ContainerStyle isShow={isShow}>
      <StToggleContainer
        onClick={() => {
          setisShow((pre) => !pre);
        }}
      >
        <p size="16">
          {isShow ? "눌러서 댓글내리기" : "눌러서 댓글보기"}
        </p>
      </StToggleContainer>
      <AddCommentForm />
      <StCommentList>
        {data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </StCommentList>
    </ContainerStyle>
  );
};


const ContainerStyle = styled.div`
  height: ${({ isShow }) => (isShow ? "400px" : "50px")};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  transition: height 400ms ease-in-out;
`;

const StToggleContainer = styled.div`
  justify-content: space-between;
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid #eee;
`;

const StCommentList = styled.div`
  height: 350px;
  overflow: scroll;
`;

export default Comments;
