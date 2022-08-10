import React from "react";
import styled from "styled-components";

import TextInputBox from "./TextInputBox";

const AddComment = () => { 
    return (
        <form>
            <button>댓글쓰기</button>
            <InputNButton ClassName="InputNButton">
            <InputBoxStyle>
                <TextInputBox type="text" placeholder="이름입력"/>
                <TextInputBox type="text" placeholder="응원 댓글 남기기(100이내)" />
            </InputBoxStyle>
            <button>추가하기</button>
            </InputNButton>
        </form>
    );
}

const InputBoxStyle = styled.div`
    display: flex;
    flex-direction: row;
`


const InputNButton = styled.div`
    display: flex;
    flex-direction: row;
`
export default AddComment;