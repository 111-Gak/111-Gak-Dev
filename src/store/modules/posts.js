import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [{
            postId: 0,
            username: "이름1",
            createdAt: "2022-01-01",
            title: "TIL제목1",
            done: 0,
            check: [{
                    text: "할 일1",
                    checked: 0
                },
                {
                    text: "할 일2",
                    checked: 1
                },
                {
                    text: "할 일3",
                    checked: 2
                }
            ]
        },
        {
            postId: 1,
            username: "이름2",
            createdAt: "2022-02-02",
            title: "TIL제목2",
            done: 0,
            check: [{
                    text: "할 일1",
                    checked: 0
                },
                {
                    text: "할 일2",
                    checked: 1
                },
                {
                    text: "할 일3",
                    checked: 2
                }
            ]
        }
    ],
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        testPosts: (state, action) => {
            console.log(state, action)
        },
    }
})

export const { testPosts } = postsSlice.actions;
export default postsSlice.reducer;