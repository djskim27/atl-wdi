const express = require('express');
const router = express.Router();
const data = require('../data');

/* INDEX TODOS */
router.get('/', function(req,res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });
});

router.get('/new', (req,res) => {
    res.render('todos/new');
    
    
});
router.get('/:id', (req, res) =>{
    const id = req.params.id;
    const todo = data.seededTodos[id];
    res.render('todos/show', {
    todo: todo
    });
});

router.get('/:id/edit', function(req, res){
  res.render('todos/edit', {
    todo: {
      id: req.params.id,
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
    }
  });
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = {
        description: req.body.description,
        urgent: req.body.urgent
    };
    data.seededTodos.push(newTodo);
    res.redirect("/todos");
})

router.delete('/:id', (req, res) => {
    data.seededTodos.splice(req.params.id, 1);
    res.redirect("/todos");
    res.send("Delete route hit!");
    
})

router.put('/:id', function(req, res) {
  const id = req.params.id;
  const todo = data.seededTodos[id];
  todo.description = req.body.description;
  todo.urgent = req.body.urgent;
  res.method = "GET";

  res.redirect('/todos');
})

module.exports = router;
