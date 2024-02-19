const express = require(`express`);
const { products, users } = require("./dummy.json");
// const products = data.products;
// const users = data.users;
const app = express();

// console.log(products);

app.get(`/products`, (request, response) => {
  response.type = `application/json`;
  response.status(200);
  response.send({ products });
});
app.get("/users", (request, response) => {
  response.type = `application/json`;
  response.send({ users });
});

app.get(`/usernames`, (request, response) => {
  response.type = `application/json`;
  const filteredByName = users.map((element) => {
    return element.name;
  });
  response.send({ filteredByName });
});

app.listen(3001, () => {
  console.log(`Server is listening`);
});
