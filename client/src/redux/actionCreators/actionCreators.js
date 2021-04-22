import { ADD_TODO, CHANGE_STATUS_TODO, DEL_TODO, EDIT_TODO, INIT_TODOS } from "../actionTypes/actionTypes"

export const addTodoAC = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const initTodosAC = (payload) => {
  return {
    type: INIT_TODOS,
    payload
  }
}

export const delTodoAC = (payload) => {
  return {
    type: DEL_TODO,
    payload
  }
}

export const changeStatusTodoAC = (payload) => {
  return {
    type: CHANGE_STATUS_TODO,
    payload
  }
}

export const editTodoAC = (payload) => {
  return {
    type: EDIT_TODO,
    payload
  }
}
