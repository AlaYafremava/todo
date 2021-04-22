import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitTodos } from '../../redux/reduxThunk/asyncFuncs'
import Card from '../Card/Card'

function List() {
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(fetchInitTodos())
  }, [dispatch])

  return (
    <ol className="list-group list-group-numbered">
      {todos.length ? (
        todos.map(el => <Card key={el._id} todo={el} />)
      ) : (
        <h3>Nothing to do</h3>
      )}
    </ol>
  )
}

export default List
