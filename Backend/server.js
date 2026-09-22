require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose")
const app = express()
const port = 3000
const User = require('./model/User')
const authRoute = require('./routes/authRoute')

app.use(express.json())

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  if (_req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

app.get('/', (req, res) => {
  res.send('Server is running....')
})



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully")

  } catch (error) {
    console.log(error);
  }
}
connectDB();

app.use('/', authRoute)

//get all users from db
app.get('/read', async (_req, res) => {
  const users = await User.find({});
  res.json(users);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
