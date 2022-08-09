import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checklist: {
        chk1Text: "",
        chk1: 0,
        chk2Text: "",
        chk2: 0,
        chk3Text: "",
        chk3: 0,
    }
}

export const checklistSlice = createSlice({
    name: "checklists",
    initialState,
    reducers: {
        editChecklist: (state, action) => {
            const {name:chkNum, currentValue} = action.payload;
            const newState={...state.post, [chkNum+"Text"]: currentValue};
            console.log(newState);

            console.log('체크리스트 수정');
        }
    }
})

export const { editChecklist } = checklistSlice.actions;
export default checklistSlice.reducer;