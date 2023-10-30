import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if(findItem) {
        findItem.count++
      }else {
        state.items.push(action.payload)
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
				return (obj.price * obj.count) + sum
			}, 0)
    },

    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    minusCount(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload)

      if(findItem) {
        findItem.count--
      }
    },

    clearItems(state, action) {
      state.items = [] 
    }
  }
})


export const { addItem, removeItem, minusCount, clearItems } = cartSlice.actions

export default cartSlice.reducer