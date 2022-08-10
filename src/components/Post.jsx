import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import { patchChecklistThunk } from "../store/modules/checklist";

export default function Post(props) {
    const navigate = useNavigate();

    const {postId, username, createdAt, title, done}=props.list;
    const [chks, setChks] = useState([]);
    const [patched, setPatched] = useState(true);
    const dispatch = useDispatch()

    const fetchChks = async () => {
        const { data }  = await axios.get("http://localhost:3001/checklist?postId="+postId)
        
        setChks( data[0] );
    }

    useEffect(()=>{
        fetchChks()

    }, [patched])

    const handleCheckboxChange =(ev, postId)=> {
        // setPatched(!patched)
        const name = ev.target.name;
        const toggleDone = ev.target.checked? 1 : 0 ;

        const newValue = {[ev.target.name]: toggleDone} 
        const patchValue = {...chks, ...newValue}

        console.log(patchValue);

        dispatch(patchChecklistThunk(patchValue));
        

        // axios.post(`http://localhost:3001/checklist?postId=6f-s9ewv0n`, patchValue, {
        //     headers: { 'Content-Type': 'application/json' }
        // })

        // 1. thunk , state => selector
        // 2. delete => post

        // const req = makePatchRequest(patchValue)
        // console.log(req);
    }

    // const makePatchRequest = (updates) =>
    //     new Request("http://localhost:3001/checklist?postId=6f-s9ewv0n", {
    //         method: 'PATCH',
    //         headers: new Headers({ 'Content-Type': 'application/json' }),
    //         body: updates
    //     }
    // )
    

    return(
        <MyPost  
        onClick={()=> {
            navigate('/post/'+postId)}
        }>
            <div className="post-header">
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
                <ProgressBar chks={chks} />

                <div>
                    <div key={'chk1'}>
                        <input 
                            type="checkbox" 
                            name={'chk1'}
                            id={'chk1'}
                            checked={chks.chk1 ? 'checked' : false}
                            onChange={(ev)=> {
                                ev.preventDefault();
                                handleCheckboxChange(ev, postId);
                            }}
                        />
                        <label htmlFor={'chk1'} >
                            {chks.chk1Text}
                        </label>
                    </div>

                    {chks.chk2Text && 
                    <div key={'chk2'}>
                        <input 
                            type="checkbox" 
                            name={'chk2'}
                            id={'chk2'}
                            checked={chks.chk2 ? 'checked' : false}
                            onChange={(ev)=> {
                                ev.preventDefault();
                                handleCheckboxChange(ev, postId);
                            }}
                        />
                        <label htmlFor={'chk2'} >
                            {chks.chk2Text}
                        </label>
                    </div>}
                    
                    {chks.chk3Text && 
                    <div key={'chk3'}>
                        <input 
                            type="checkbox" 
                            name={'chk3'}
                            id={'chk3'}
                            checked={chks.chk3 ? 'checked' : false}
                            onChange={(ev)=> {
                                ev.preventDefault();
                                handleCheckboxChange(ev, postId);
                            }}
                        />
                        <label htmlFor={'chk3'} >
                            {chks.chk3Text}
                        </label>
                    </div>}

                </div>

            </div>
        </MyPost>
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