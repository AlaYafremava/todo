import { useRef, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdDoneAll } from 'react-icons/io'
import { RiEditLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import {
  fetchChandeStatusTodo,
  fetchDelTodo,
  fetchEditTodo,
} from '../../redux/reduxThunk/asyncFuncs'

function Card({ todo }) {
  const editTextInput = useRef()
  const dispatch = useDispatch()

  const delTodoHandler = id => {
    dispatch(fetchDelTodo(id))
  }

  const changeStatusTodoHandler = id => {
    dispatch(fetchChandeStatusTodo(id))
  }

  const editTodoHandler = event => {
    event.preventDefault()
    // console.log(event.target.id, editTextInput.current.value)

    dispatch(fetchEditTodo(event.target.id, editTextInput.current.value))
    setEditBtn(false)
  }

  const [editBtn, setEditBtn] = useState(false)

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <span className={todo.completed ? 'doneTodo' : undefined}>{todo.text}</span>
      {editBtn ? (
        <form
          id={todo._id}
          onSubmit={editTodoHandler}
          className="input-group"
          style={{ width: '500px' }}>
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="form-control"
            defaultValue={todo.text}
            ref={editTextInput}
          />
          <button className="btn btn-outline-secondary" id="button-addon2">
            Edit
          </button>
        </form>
      ) : (
        ''
      )}
      <div>
        <button onClick={() => changeStatusTodoHandler(todo._id)} className="btn btn-outline-link ">
          <IoMdDoneAll size="1.2em" color="green" />
        </button>
        <button
          onClick={() => {
            setEditBtn(!editBtn)
          }}
          className="btn btn-outline-link">
          <RiEditLine size="1.2em" color="orange" />
        </button>
        <button onClick={() => delTodoHandler(todo._id)} className="btn btn-outline-link">
          <RiDeleteBin6Line size="1.2em" color="red" />
        </button>
      </div>
    </li>
  )
}

export default Card
