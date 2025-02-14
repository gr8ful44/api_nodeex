const express = require("express");
const app = express();
const port = 8000;

const books = [
  {
    name: "cat",
    desc: "asd",
  },
  {
    name: "dog",
    desc: "erw",
  },
];
const auto_inc = 1;

app.get("/shop/books", (req, res) => {
  res.json(books);
});

app.post("/added_book", (req, res) => {
  const book = req.body;

  res.json({
    message: "add 200 ok.",
    status: res.statusCode,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
