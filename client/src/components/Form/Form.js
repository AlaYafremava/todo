import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddTodo } from '../../redux/reduxThunk/asyncFuncs'

function Form(props) {
  const dispatch = useDispatch()
  const todoInput = useRef()

  const addTodoHandler = event => {
    event.preventDefault()
    dispatch(fetchAddTodo(todoInput.current.value))
    todoInput.current.value = ''
  }

  return (
    <form className="d-flex" action="/todo" method="POST" onSubmit={addTodoHandler}>
      <input
        ref={todoInput}
        autoComplete="off"
        name="text"
        className="form-control me-3"
        type="text"
        placeholder="What needs to be done?"
        required
      />
      <button className="btn btn-outline-success">Add</button>
    </form>
  )
}

export default Form
