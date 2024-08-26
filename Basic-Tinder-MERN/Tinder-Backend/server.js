import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Cards from "./dbCards.js"
import cors from "cors"
dotenv.config();

const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://shivamkumar250403:ZnXdDlkPQ4UTPmgF@cluster0.avqvc.mongodb.net/tinderdb?retryWrites=true&w=majority&appName=Cluster0"
const app = express();
app.use(express.json());

app.use(cors())

mongoose.connect(connection_url).then(() => {
  console.log("Mongoose coonnected")

}).catch((error) => console.error('MongoDB connection error:', error));

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.post('/tinder/cards', async (req, res) => {
  console.log('Received data:', req.body); // Log the received data
  try {
    const dbCards = req.body;
    const data = await Cards.insertMany(dbCards);
    res.status(201).send(data);
  } catch (err) {
    console.error('Error:', err); // Log any errors
    res.status(500).send(err);
  }
});




app.get('/tinder/cards', async (req, res) => {
  try {
    const data = await Cards.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
