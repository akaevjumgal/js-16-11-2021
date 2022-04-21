
import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      Postdelete: (state ,action) => {
        state.splice (action.payload,1)
      },
      Postadd: (state) => {
          const value = prompt('Введите текст')
          if (value){
              state.push( {
                  body : value
              })
          }
    
      },
      PostRedact: (state , action)=> {
            const value = prompt('Новый текст:')
            if (value){
            state[action.payload].body = value}
            
         
      }
    }
});
export const { Postdelete , Postadd , PostRedact } = PostSlice.actions

export default PostSlice.reducer