
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";

export default function Post(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {postId, username, createdAt, title, done}=props.list;

    return (
    <>
        {<MyPost>
            <div className="post-header"  
            onClick={()=> {
                navigate('/post/'+postId)}
            }>
                <div>
                    <span className="post-name">
                        {done? "💚":"🖤"}
                        {username}
                    </span>
                    <span className="post-title">
                        {title}
                    </span>
                </div>
                <span className="post-date">
                    {createdAt}
                </span>
            </div>
            <div className="post-body">
                {/* <ProgressBar postId={postId} /> */}

                <div>
                    <CheckBox postId={postId}/>
                </div>

            </div>
        </MyPost>
        }
    </>
    )
}

const MyPost = styled.div`
display: flex;
gap: 30px;
border: 1px solid #ddd;
box-sizing: border-box;
padding: 10px 15px;
margin-bottom: 20px;

.post-header {
    width: 150px;
    min-height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}

.post-title,
.post-date {
    display: block;
}

.post-name {
    font-size: 0.8em;
}

.post-title {
    display: block;
    font-size: 1.2em;
}

.post-date {
    display: block;
    font-size: 0.8em;
}

.post-body {
    flex: 1 1 auto;    
    display: flex;
    flex-flow: column;
    justify-content: space-between;

}

`