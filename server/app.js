const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { findByIdAndUpdate, findOne } = require('./models/Todo')

mongoose.connect('mongodb://localhost/Todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json({ succes: true, todos })
  } catch (error) {
    res.status(404).json({ succes: false, msg: err.message })
  }
})

app
  .route('/todo')
  .post(async (req, res) => {
    if (req.body.text) {
      const todo = await Todo.create({
        text: req.body.text,
      })
      // console.log('todo',todo);
      res.status(201).json(todo)
    } else {
      res.status(400).json({ create: false })
    }
  })
  .delete(async (req, res) => {
    // console.log(req.body.id);
    await Todo.findByIdAndDelete(req.body.id, (err, todo) => {
      if (err) {
        console.log(err)
      } else if (!todo) {
        res.status(404).json({ delete: false })
      } else {
        res.status(200).json(req.body.id)
      }
    })
  })
  .patch(async (req, res) => {
    const todo = await Todo.findById(req.body.id)
    todo.completed = !todo.completed
    await todo.save()
    res.status(200).json(todo)
  })
  .put(async (req, res) => {
    if (req.body.id && req.body.text) {
      await Todo.findByIdAndUpdate(req.body.id, {
        text: req.body.text,
        completed: false,
      })

      const editTodo = await Todo.findOne({ _id: req.body.id })
      console.log('>>>>>>>>>', editTodo);

      res.status(200).json(editTodo)
    } else {
      res.status(400).json({ update: false })
    }
  })

module.exports = app
