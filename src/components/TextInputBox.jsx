import styled from "styled-components";


export default function TextInputBox(props){
    const {name, placeholder, max=null, min=null, required=null} = props;

    return (
        <InputBox>
            <label htmlFor={name}>
                {placeholder}
                {required?"*":""}
            </label>
            <input 
            id={name}
            name={name}
            type="text"
            placeholder={`${placeholder}`}
            autoComplete="off"
            maxLength={max}
            minLength={min}
            required={required}
            />
        </InputBox>
    )
}

const InputBox = styled.div`
max-width: 500px;
margin: 0 auto 10px;
display: flex;
flex-flow: column;

label {
    font-size: 14px;
    color: #555;
    padding: 10px 0 5px;
}
input {
    padding: 10px 10px;
}
`