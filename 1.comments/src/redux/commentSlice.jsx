import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentList:[]
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComments:(state,action)=>{
      state.commentList.push(action.payload);
    }
  },
})

export const {addComments } = commentSlice.actions

export default commentSlice.reducer