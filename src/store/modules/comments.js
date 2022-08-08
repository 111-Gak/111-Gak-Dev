import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment: [{
        postId: 0,
        comments: [{
                commentId: 0,
                commentUsername: "김영희",
                commentText: "화이팅하세요!",
                commentCreatedAt: "0000-00-00"
            },
            {
                commentId: 1,
                commentUsername: "유재석",
                commentText: "반갑습니다.",
                commentCreatedAt: "0000-00-00"
            }
        ]
    }]
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        
    }
})

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;