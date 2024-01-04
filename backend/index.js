const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
const userRoutes = require('./routes/user');



app.use(express.json());
app.use(express.urlencoded({extended : false}))

const mongoconnection = async() =>{
    try {
        await mongoose.connect("mongodb+srv://ghorpadeanuj56:ghorpadeanuj56@cluster0.fiti9ob.mongodb.net/?retryWrites=true&w=majority")
        console.log("mongodb connect successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
mongoconnection();


app.use("/", require("./routes/user"));




const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})