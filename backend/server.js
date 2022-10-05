const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json()); //body parser

function readJson() {
  const todos = fs.readFileSync(`${__dirname}/todos.json`, (err) =>
    err ? console.log(err) : null
  );
  return JSON.parse(todos);
}

function writeJson(todosJson) {
  fs.writeFileSync(
    `${__dirname}/todos.json`,
    JSON.stringify(todosJson, null, 2),
    (err) => (err ? console.log(err) : null)
  );
}

app.get('/todos', (req, res) =>
  res.sendFile(path.join(`${__dirname}/todos.json`))
);

app.post('/addTodo/:id', (req, res) => {
  const todosJson = readJson();
  /* console.log(todosJson);
  console.log(req.body); */
  todosJson.push(req.body);
  console.log(todosJson);

  writeJson(todosJson);
  res.send({ response: `todo id: ${req.params.id} has been added` });
});

app.delete('/todos/:id', (req, res) => {
  const todosJson = readJson();
  //req.params.id
  const filteredList = todosJson.filter(
    (todoElement) => todoElement.id !== +req.params.id
  ); //a + jel szamma alakitja
  writeJson(filteredList);
  res.status(204).end();
});

app.listen(9000, () => console.log('server is running on port 9000'));
