import {
  addTodoAC,
  changeStatusTodoAC,
  delTodoAC,
  editTodoAC,
  initTodosAC,
} from '../actionCreators/actionCreators'

export const fetchInitTodos = () => {
  return dispatch => {
    fetch('/todos')
      .then(response => response.json())
      .then(({ todos }) => dispatch(initTodosAC(todos)))
  }
}

export const fetchAddTodo = text => {
  return dispatch => {
    fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        text,
      }),
    })
      .then(response => response.json())
      .then(todo => dispatch(addTodoAC(todo)))
  }
}

export const fetchDelTodo = id => {
  return dispatch => {
    fetch('/todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then(response => response.json())
      .then(data => dispatch(delTodoAC(data)))
  }
}

export const fetchChandeStatusTodo = id => {
  return dispatch => {
    fetch('/todo', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then(response => response.json())
      .then(todo => dispatch(changeStatusTodoAC(todo._id)))
  }
}

export const fetchEditTodo = (id, text) => {
  return dispatch => {
    fetch('/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        text,
      }),
    })
      .then(response => response.json())
      .then(editTtodo => dispatch(editTodoAC(editTtodo)))
  }
}
