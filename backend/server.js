const express = require('express');
const cors = require('cors');  //to allow making request to a remote server from our own server
const mongoose=require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
 
const notesRouter=require('./routes/notes');
const authRouter=require('./routes/auth');

app.use('/notes', notesRouter);
app.use('/users', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});