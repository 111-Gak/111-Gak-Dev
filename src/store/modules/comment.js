import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const __getComment = createAsyncThunk(
  "GET_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`http:localhost:3001/comments/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  data: {
    content: "",
    username: "",
  
    id: 0,
    postId: 0,
  },
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.data.content = "";
    },
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
  extraReducers: {
    [__getComment.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { clearComment, globalEditModeToggle } = comment.actions;
export default comment.reducer;
