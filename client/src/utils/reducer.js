const reducer = (state, action) => {
  switch (action.type) {
    case 'initTodos':
      return [...state, ...action.payload]

    case 'addTodo':
      return [...state, action.payload]

    case 'changeStatusTodo':
      return state.map(el => el._id == action.payload ? el.complited = !el.complited : el)

    case 'delTodo':
      console.log(action.payload);
      return state.filter(el => el._id != action.payload)

    default:
      return [...state]
  }
}

export default reducer
