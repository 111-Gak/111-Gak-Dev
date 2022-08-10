import styled from "styled-components";

export default function ProgressBar(props){
    const chks = props.chks;
    let count = 0;

    for (const x in chks){
        if(chks[x]===1) count+=1  
    }

    return (
        <MyProgressBar count={count} />
    )
}

const MyProgressBar = styled.div`
    width: ${(props) => ((props.count / 3) * 100) + '%'};
    height: 10px;
    border-radius: 10px;
    background-color: yellowgreen;
    background-image: linear-gradient(to left, #1ac51a, #83d744);
`