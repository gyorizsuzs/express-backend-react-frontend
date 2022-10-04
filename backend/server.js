const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json()); //body parser

app.get('/todos', (req, res) =>
  res.sendFile(path.join(`${__dirname}/todos.json`))
);

app.post('/addTodo/:id', (req, res) => {
  const todos = fs.readFileSync(`${__dirname}/todos.json`, (err) =>
    err ? console.log(err) : null
  );
  const todosJson = JSON.parse(todos);
  /* console.log(todosJson);
  console.log(req.body); */
  todosJson.push(req.body);
  console.log(todosJson);

  fs.writeFileSync(
    `${__dirname}/todos.json`,
    JSON.stringify(todosJson, null, 2),
    (err) => (err ? console.log(err) : null)
  );
  res.send({ response: `todo id: ${req.params.id} has been added` });
});

app.listen(9000, () => console.log('server is running on port 9000'));
