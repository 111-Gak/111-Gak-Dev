import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import { patchChecklistThunk } from "../store/modules/checklist";

export default function Post(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {postId, username, createdAt, title, done}=props.list;

    const [chks, setChks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        fetchChks()
    }, [loaded])

    const fetchChks = async () => {
        let data;
        try {
            data = await axios.get("http://localhost:3001/checklist")
        } catch (err) {
            console.log(err)
        } finally {
            setChks(data.data)
            setLoaded(true)
        }
    }

    const handleCheckboxChange =(ev, postId)=> {
        // setPatched(!patched)
        const name = ev.target.name;
        const toggleDone = ev.target.checked? 1 : 0 ;

        const newValue = {[ev.target.name]: toggleDone} 
        const patchValue = {...chks, ...newValue}


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
    

    return (
        <>
            { loaded && <MyPost  
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
                                checked={chks[0].chk1 ? 'checked' : false}
                                onChange={(ev)=> {
                                    ev.preventDefault();
                                    handleCheckboxChange(ev, postId);
                                }}
                            />
                            <label htmlFor={'chk1'} >
                                {chks[0].chk1Text}
                            </label>
                        </div>

                        {chks[0].chk2Text && 
                        <div key={'chk2'}>
                            <input 
                                type="checkbox" 
                                name={'chk2'}
                                id={'chk2'}
                                checked={chks[1].chk2 ? 'checked' : false}
                                onChange={(ev)=> {
                                    ev.preventDefault();
                                    handleCheckboxChange(ev, postId);
                                }}
                            />
                            <label htmlFor={'chk2'} >
                                {chks[1].chk2Text}
                            </label>
                        </div>}
                        
                        {chks[0].chk3Text && 
                        <div key={'chk3'}>
                            <input 
                                type="checkbox" 
                                name={'chk3'}
                                id={'chk3'}
                                checked={chks[2].chk3 ? 'checked' : false}
                                onChange={(ev)=> {
                                    ev.preventDefault();
                                    handleCheckboxChange(ev, postId);
                                }}
                            />
                            <label htmlFor={'chk3'} >
                                {chks[1].chk3Text}
                            </label>
                        </div>}

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