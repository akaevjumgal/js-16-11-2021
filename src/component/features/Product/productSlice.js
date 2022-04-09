
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [],
}

const productSlice = createSlice({
    name:'shop',
    initialState,
    reducers: {
        create: (state,action)=> {
            state.products.push(action.payload)
        },
        update: (state, action)=> {
            const { id } = action.payload;
           let product =  state.products.find((p) => p.id === id);
        
             if (product) {
                 product = action.payload;
                 return true
             }
             return false
        },
        remove: (state,action) => {
            const { id } = action.payload;
            let productIndex =  state.products.findIndex((p) => p.id === id);
            if (productIndex) {
                state.products.splice(productIndex, 1)
                return true
            }
            return false
        }
    }
})
export const { create, update, remove } = productSlice.actions
export default productSlice.reducer