const mongoose = require('mongoose')
const Todo = require('./models/Todo')

mongoose.connect('mongodb://localhost/Todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function seeder() {
  await Todo.create({
    text: 'Go to dance classes'
  })

  await Todo.create({
    text: 'Take away some food'
  })

  mongoose.connection.close()
}

seeder()
