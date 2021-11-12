const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//ENVIRONMENT VARIABLE
require('dotenv').config();

//SERVER
const app = express();
const port = process.env.PORT || 5000;

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//DATABASE CONNECTION
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kew9p.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
).then(()=>{
  console.log('database conneted');
})

//APIS ROUTES
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');


app.use('/users',usersRouter);
app.use('/posts',postsRouter);

//LISTEN SERVER
app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
});