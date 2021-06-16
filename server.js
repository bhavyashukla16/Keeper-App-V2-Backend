import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import notesRoutes from './routes/notes.js'
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

await mongoose.connect(process.env.MONGOPATH, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
.then(x => {
    console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
})
.catch(err => {
    console.error('Error connecting to mongo', err);
});

app.use('/notes', notesRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to server!")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


