import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import notesRoutes from './routes/notes.js'
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/notes', notesRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to server!")
})

try {
    await mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}
catch(err) {
    console.log(err)
} 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


