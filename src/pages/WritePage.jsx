import Button from "../components/Button";
import TextInputBox from "../components/TextInputBox";
import styled from "styled-components";

export default function WritePage (){
    
    return (
        <MyForm>
            <TextInputBox 
            name={'username'} 
            placeholder={'작성자'}
            max={20}
            required
            />

            <TextInputBox 
            name={'title'} 
            placeholder={'제목'}
            max={50}
            required
            />

            <TextInputBox 
            name={'chk1'} 
            placeholder={'첫 번째 체크 박스'}
            max={100}
            required
            />

            <TextInputBox 
            name={'chk2'} 
            placeholder={'두 번째 체크 박스'}
            max={100}
            />

            <TextInputBox 
            name={'chk3'} 
            placeholder={'세 번째 체크 박스'}
            max={100}
            />

            <div>
                <Button 
                buttonText={'클릭하세요'} 
                action={null}
                />
            </div>

        </MyForm>
    )
}

const MyForm = styled.form`

& > *:last-child {
    margin-top: 40px;
}

`