import { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

export default function ProgressBar(props){
    const {postId} = props
    const [chks, setChks] = useState();
    const [counts, setCounts] = useState(0);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{

        fetchChks();
        renderCount();

    }, [loaded])

    const renderCount = () => {
        setCounts(0)  
        
        for (const x in chks){
            if(chks[x]===1 && x !== 'id') {
                setCounts(curr => curr+1)  
            }
        }
    }

    const fetchChks = async () => {
        let data;
        try {
            data = await axios.get(`http://localhost:3001/checklist?postId=${postId}`)
        } catch (err) {
            console.log(err)
        } finally {
            setChks(...data.data)
            setLoaded(true)
        }
    }


    return (
        <>
            {loaded && <MyProgressBar counts={counts}>
                <div className="percent">
                    {counts * 33}%
                </div>    
            </MyProgressBar>}
        </>
    )
}

const MyProgressBar = styled.div`
    width: ${(props) => ((props.counts / 3) * 100) + '%'};
    height: 13px;
    border-radius: 3px;
    margin-top: 10px;

    background-color: yellowgreen;
    background-image: linear-gradient(to left, #1ac51a, #83d744);
    
    position: relative;

    .percent {
        display: inline-block;
        position: absolute;
        left: 4px;
        top: -1px;

        color: green;
        
        font-size: 10px;
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`