const express = require("express");
const app = express();
const port = 9000;

let userFunc = function(req, res) {
  res.send(req.params.userId + "<br />" + req.params.column);
};

app.get("/users/:userId/:column", userFunc);

app.get("/range/:low-:high", function(req, res) {
  let out = "<ol>";
  let low = parseInt(req.params.low);
  let high = parseInt(req.params.high);

  out += "</ol>";
});

// app.get("/cat+s/", (req, res) => {
//   res.send(`<h1>Cats!</h1>`);
// });

// app.get(/(cat|dog)/, (req, res) => {
//   res.send(`<h1>Cats!</h1>`);
// });

app.get("/do?gs", (req, res) => {
  res.send(`<h1>Dogs!</h1>`);
});
app.post("/do?gs", (req, res) => {
  res.send(`<h1>Added a dog!</h1>`);
});

app.get("/ze(bra)+", (req, res) => {
  res.send(`<h1>Zebras!</h1>`);
});

app.get("/pen*guin", (req, res) => {
  res.send(`<h1>Penguin!</h1>`);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
