
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
          const title = prompt('Введите Тип :')
          const body = prompt('Введите название:')
          const price = prompt('Введите цену:')
          if (title){
              state.push( {
                  title : title,
                  body: body,
                  price: price,
              })
          }
    
      },
      PostRedact: (state , action)=> {
        const title = prompt('Введите Новый Тип :')
        const body = prompt('Введите Новое Название:')
        const price = prompt('Введите Новую Цену:')
            if (title){
            state[action.payload].title = title};
            if (body){
                state[action.payload].body = body};
            if (price){
                    state[action.payload].price = price}
            
         
      }
    }
});
export const { Postdelete , Postadd , PostRedact } = PostSlice.actions

export default PostSlice.reducer