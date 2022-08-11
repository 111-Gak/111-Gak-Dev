import { createSlice } from "@reduxjs/toolkit";

const today = new Date();
const mouth = today.getMonth()+1;
const date = today.getDate();
const zeroMonth = (mouth<10)?'0'+parseInt(mouth):mouth;
const zeroDate = (date<10)?'0'+parseInt(date):date;

const initialDate = `${today.getFullYear()}-${zeroMonth}-${zeroDate}`
const initialState = {
    comment: {
        postId: "",
        commentUsername: "",
        commentText: "",
        commentCreatedAt: initialDate
    }
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        editComment: (state, action) => {
            const {name:keyword, currentValue} = action.payload;
            const newState={...state.comment, [keyword]: currentValue};
            state.comment = newState;
            console.log(action.payload, newState);
            console.log('코멘트추가');
        }
    }
})

export const { editComment } = commentsSlice.actions;
export default commentsSlice.reducer;