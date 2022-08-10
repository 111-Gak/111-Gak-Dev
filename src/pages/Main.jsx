import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Main = () => {
    const nagivate = useNavigate();
    return (
        <div>
            <ButtonGroup>
            <ButtonStyle onClick={() => {
                nagivate("/write")
            }}>
                할일 기록하기
            </ButtonStyle>
            <ButtonStyle onClick={() => {
                nagivate("/community")
            }}>
                
                커뮤니티 보러가기
            </ButtonStyle>
            </ButtonGroup>
        </div>
    )
}

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const ButtonStyle = styled.button`
    width: 300px;
    margin: 10px auto;
    background: #d6d6d6;
    color: #6b6868;
    line-height: 42px;
    padding: 0;
    border: none;
    position: relative; //수정 기준점, 

    &:hover {
    background: transparent;
    color: #816f6f;
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #9a1f1f21,
    4px 4px 5px 0px #0001;
    }
    &:before,
    &:after{
    content:'😍';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #925656;
    transition:400ms ease all;
    }
    &:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
    }
    &:hover:before,
    &:hover:after{
    width:100%;
    transition:800ms ease all;
    }

    //button component

    /* all: unset;
    display: block;

    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 4px;

    font-size: 14px;
    border: 1px solid #aaa;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        
        background-color: #aaa;
        border-color: #aaa;
        color: #fff;
    } */

`

export default Main;