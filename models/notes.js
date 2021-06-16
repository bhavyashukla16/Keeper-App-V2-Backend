import mongoose from 'mongoose'
const Schema = mongoose.Schema
const notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, {timestamps: true})

const Notes = mongoose.model('Notes', notesSchema)
export default Notes;