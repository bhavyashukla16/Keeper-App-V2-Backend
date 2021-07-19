import mongoose from 'mongoose'
const Schema = mongoose.Schema
const notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    pinned: Boolean
}, {timestamps: true})

const Notes = mongoose.model('notes', notesSchema)
export default Notes;