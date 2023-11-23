import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Асинхронная функция
export const fetchMenus = createAsyncThunk(
	'cart/fetchMenusStatus',
	async props => {
		// Деструктуризация объекта
		const { MenuAPI, select } = props
		// Деструктуризация и запрос
		const { data } = await axios.get(`${MenuAPI}${select}`)

		return data
	}
)

const initialState = {
	searchValue: '',
	// Все товары Menu
	menu: [],
	items: [],
	totalPrice: 0,
	status: 'loading',
	userInfo: null
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			// Находим элемент
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			// Проверка есть ли элемента
			if (findItem) {
				// Если товар уже есть в корзине увеличиваем количество товара
				findItem.count++
			} else {
				// Если товара нету в корзине добавляем товар в корзину
				state.items.push(action.payload)
			}

			// Вычисляем итоговую сумму
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},

		setItems(state, action) {
			// Добавление текста в поиск
			state.searchValue = action.payload
		},

		removeItem(state, action) {
			// Фильтруем массив (Удаляем)
			state.items = state.items.filter(item => item.id !== action.payload)
		},

		minusCount(state, action) {
			// Находим элемент
			const findItem = state.items.find(obj => obj.id === action.payload)

			// Проверка есть ли элемента
			if (findItem) {
				findItem.count--

				// Вычисляем итоговую сумму
				state.totalPrice = state.items.reduce((sum, obj) => {
					return obj.price * obj.count + sum
				}, 0)
			}
		},

		clearItems(state) {
			// Очистка корзины
			state.items = []
		},

		// Добавление пользователя
		addUser(state, action) {
			state.userInfo = action.payload
		},

		// Удалить пользователя
		removeUser(state) {
			state.userInfo = null
		}
	},

	extraReducers: {
		// Ожидание
		[fetchMenus.pending]: state => {
			// Обновление статуса на загрузку
			state.status = 'loading'
			// Очистка меню на случай если в нем есть данные
			state.menu = []
		},
		// Получение
		[fetchMenus.fulfilled]: (state, action) => {
			// Добавление полученных данных в Меню
			state.menu = action.payload
			// Обновление статуса на успешно
			state.status = 'success'
		},
		// Ошибка
		[fetchMenus.rejected]: (state, action) => {
			// Обновление статуса на ошибку
			state.status = 'error'
			// Очистка меню на случай если в нем есть данные
			state.menu = []
		},
	},
})

export const { addItem, removeItem, minusCount, clearItems, setItems, addUser, removeUser } =
	cartSlice.actions

export default cartSlice.reducer
