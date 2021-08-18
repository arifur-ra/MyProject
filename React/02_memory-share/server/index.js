import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import postRoutes from './routes/postRoutes.js'


const app =express()



app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());


app.use('/posts', postRoutes);


const PORT=process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/memories', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=>console.log(`Server Running on Port:${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);