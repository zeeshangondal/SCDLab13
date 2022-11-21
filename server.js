const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const UserRouter = require('./routes/User');

app.use('/User', UserRouter)
app.get("/get",(req,res)=>{
    res.status(200).send("GET API")
})

const connectToDB = async () => {
    try {
      await connectDB();
    } catch (error) {
      console.log(error);
    }
};


module.exports={app,connectToDB}