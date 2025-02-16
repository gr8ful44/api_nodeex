const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const users = [];
let auto_inc = 1;

// app.method(url,callback)

app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/add_user", (req, res) => {
  const reqBody = req.body;
  const newUser = {
    id: auto_inc,
    name: reqBody.name,
    email: reqBody.email,
  };
  auto_inc += 1;
  users.push(newUser);

  res.json({
    message: "added 200 okokokokk~~",
    user: newUser,
  });
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  const updateData = req.body;
  let selectedUser = users.findIndex((user) => user.id == id);
  users[selectedUser] = updateData;

  res.json({
    message: "updated 200 okokokok!!",
    data: {
      user: updateData,
      index_updated: selectedUser,
    },
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
