const express = require('express');
const connectDB = require('./db/dbConnection');
const app = express();

const UserModel = require('./db/user');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

// middleWare  for parse
app.use(express.json());

// enable cors

app.use(cors());

// Registration

app.post('/registration', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new UserModel({ username, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'error creating user' });
  }
});

//Login

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Loged In' });
  } catch (error) {
    res.status(500).json({ error: 'LogIn failed' });
  }
});

connectDB();
app.listen(port, () => {
  console.log('listening at port 8000');
});
