import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";
// const today = new Date();
// const mouth = today.getMonth()+1;
// const date = today.getDate();
// const zeroMonth = (mouth<10)?'0'+parseInt(mouth):mouth;
// const zeroDate = (date<10)?'0'+parseInt(date):date;

export const __getCommentsThunk = createAsyncThunk(
    "GET_COMMENTS",
    async (_, thunkAPI) => {
      try {
        const { data } = await axios.get(`${serverUrl}/comments`);
        return thunkAPI.fulfillWithValue(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  );
  
  export const __getCommnetsByTilId = createAsyncThunk(
    "GET_COMMENT_BY_Til_ID",
    async (arg, thunkAPI) => {
      try {
        const { data } = await axios.get(`${serverUrl}/comments?TilId=${arg}`);
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
        await axios.delete(`${serverUrl}/comments/${arg}`);
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
        axios.patch(`${serverUrl}/comments/${arg.id}`, arg);
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
        const { data } = await axios.post(`${serverUrl}/comments`, arg);
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
    commentsByTodoId: {
      data: [],
      isLoading: false,
      error: null,
    },
  };

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
      clearTil: (state) => {
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
  
      // 댓글 조회 (TilId)
      [__getCommnetsByTilId.pending]: (state) => {
        state.commentsByTilId.isLoading = true;
      },
      [__getCommnetsByTilId.fulfilled]: (state, action) => {
        state.commentsByTilId.isLoading = false;
        state.commentsByTilId.data = action.payload;
      },
      [__getCommnetsByTilId.rejected]: (state, action) => {
        state.commentsByTilId.isLoading = false;
        state.commentsByTilId.error = action.payload;
      },
  
      // 댓글 삭제
      [__deleteComment.pending]: (state) => {
        state.commentsByTilId.isLoading = true;
      },
      [__deleteComment.fulfilled]: (state, action) => {
        state.commentsByTilId.isLoading = false;
        const target = state.commentsByTilId.data.findIndex(
          (comment) => comment.id === action.payload
        );
        state.commentsByTilId.data.splice(target, 1);
      },
      [__deleteComment.rejected]: (state, action) => {
        state.commentsByTilId.isLoading = false;
        state.commentsByTilId.error = action.payload;
      },
  
      // 댓글 수정
      [__updateComment.pending]: (state) => {},
      [__updateComment.fulfilled]: (state, action) => {
        const target = state.commentsByTilId.data.findIndex(
          (comment) => comment.id === action.payload.id
        );
        state.commentsByTilId.data.splice(target, 1, action.payload);
      },
      [__updateComment.rejected]: () => {},
      // 댓글 추가
      [__addComment.fulfilled]: (state, action) => {
        state.commentsByTilId.isLoading = false;
        state.commentsByTilId.data.push(action.payload);
      },
      [__addComment.rejected]: (state, action) => {
        state.commentsByTilId.isLoading = false;
        state.commentsByTilId.error = action.payload;
      },
      [__addComment.pending]: (state) => {
        state.commentsByTilId.isLoading = true;
      },
    },
  });
  
  export default commentsSlice.reducer;