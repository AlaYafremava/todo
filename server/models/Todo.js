const mongoose = require('mongoose')

const Todo = mongoose.model('todos', {
  text: {type: String, required: true},
  completed: {type: Boolean, default: false}
})

module.exports = Todo
