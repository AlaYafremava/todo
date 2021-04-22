import {
  ADD_TODO,
  CHANGE_STATUS_TODO,
  DEL_TODO,
  EDIT_TODO,
  INIT_TODOS,
} from '../actionTypes/actionTypes'

const initialState = { title: 'Todos', todos: [] }

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }

    case DEL_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(el => el._id !== action.payload),
      }

    case INIT_TODOS:
      return {
        ...state,
        todos: action.payload,
      }

    case CHANGE_STATUS_TODO:
      return {
        ...state,
        todos: [...state.todos].map(el =>
          el._id === action.payload
            ? { ...el, completed: (el.completed = !el.completed) }
            : el
        ),
      }

    case EDIT_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: [...state.todos].map(el =>
          el._id === action.payload._id ? action.payload : el
        ),
      }

    default:
      return state
  }
}

export default todoReducer
