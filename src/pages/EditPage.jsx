
import styled from "styled-components";



export default function EditPage (){

    return (
        <Layout>
            
            <div>
                수정 페이지입니다

                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <button> 저장하기 </button>
            </div>

        <div>
            <button>이전으로 </button>
        </div>

        </Layout>
    );
};

const Layout = styled.div`
    display: flex;
    /* background-color: gray; */
    gap: 20px;
`

