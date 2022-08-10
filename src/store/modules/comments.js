import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`http:localhost:3001/comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getCommnetsByPostId = createAsyncThunk(
  "GET_COMMENT_BY_POST_ID",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`http:localhost:3001/comments?postId=${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      await axios.delete(`http:localhost:3001/comments/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      axios.patch(`http:localhost:3001/comments/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(`http:localhost:3001/comments`, arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByPostId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.comments = null;
    },
  },
  extraReducers: {
    // 전체 댓글 조회
    [__getCommentsThunk.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getCommentsThunk.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getCommentsThunk.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },

    // 댓글 조회 (postId)
    [__getCommnetsByPostId.pending]: (state) => {
      state.commentsByPostId.isLoading = true;
    },
    [__getCommnetsByPostId.fulfilled]: (state, action) => {
      state.commentsByPostId.isLoading = false;
      state.commentsByPostId.data = action.payload;
    },
    [__getCommnetsByPostId.rejected]: (state, action) => {
      state.commentsByPostId.isLoading = false;
      state.commentsByPostId.error = action.payload;
    },

    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.commentsByPostId.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.commentsByPostId.isLoading = false;
      const target = state.commentsByPostId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByPostId.data.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.commentsByPostId.isLoading = false;
      state.commentsByPostId.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {},
    [__updateComment.fulfilled]: (state, action) => {
      const target = state.commentsByPostId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentsByPostId.data.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: () => {},
    // 댓글 추가
    [__addComment.fulfilled]: (state, action) => {
      state.commentsByPostId.isLoading = false;
      state.commentsByPostId.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.commentsByPostId.isLoading = false;
      state.commentsByPostId.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.commentsByPostId.isLoading = true;
    },
  },
});

export default comments.reducer;
