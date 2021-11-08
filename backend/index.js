const express = require("express");
const app = express();
const port = 5000;

const connectToMongo = require("./database");
connectToMongo();

// mediator
app.use(express.json());

// available routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/posts", require("./routes/posts"));
// app.use("/api/skill", require("./routes/skill"));

app.listen(port, () => {
  console.log(`Finderr Backend listening at http://localhost:${port}`);
});
