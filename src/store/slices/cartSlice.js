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
      // Находим элемент
      const findItem = state.items.find(obj => obj.id === action.payload.id)

       // Проверка есть ли элемента
      if(findItem) {
        // Если товар уже есть в корзине увеличиваем количество товара
        findItem.count++
      }else {
        // Если товара нету в корзине добавляем товар в корзину 
        state.items.push(action.payload)
      }

      // Вычисляем итоговую сумму
      state.totalPrice = state.items.reduce((sum, obj) => {
				return (obj.price * obj.count) + sum
			}, 0)
    },

    removeItem(state, action) {
      // Фильтруем массив (Удаляем)
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    minusCount(state, action) {
      // Находим элемент
      const findItem = state.items.find(obj => obj.id === action.payload)

      // Проверка есть ли элемента
      if(findItem) {
        findItem.count--

        // Вычисляем итоговую сумму
        state.totalPrice = state.items.reduce((sum, obj) => {
          return (obj.price * obj.count) + sum
        }, 0)
      }
    },

    clearItems(state) {
      // Очистка корзины
      state.items = [] 
    }
  }
})


export const { addItem, removeItem, minusCount, clearItems } = cartSlice.actions

export default cartSlice.reducer