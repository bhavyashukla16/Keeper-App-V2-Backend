import mongoose from 'mongoose'
import Note from '../models/notes.js'

export const getNotes = async(req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            success: 1,
            notes: notes
        })
    }
    catch(error) {
        res.status(404). json({
            success: 0,
            message: error.message
        })
    }
}

export const addNote = async (req, res) => {
    const note = new Note(req.body)
    try {
        await note.save();
        res.status(201).json({
            success: 1,
            message: "Note Added!"
        })
    }
    catch(error) {
        res.status(409).json({
            success: 0,
            message: error.message
        })
    }
}

export const deleteNode = async (req, res) => {
    const { id } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.json({
                success: 0,
                message: `The id ${id} is not valid`
            })
        }
        await Note.findByIdAndDelete(id);
        res.status(201).json({
            success: 1,
            message: "Note deleted!"
        })
    } catch(error) {
        res.status(409).json({
            success: 0,
            message: error.message
        })
    }
}

export const editNote = async(req, res) => {
    const { id } = req.params;
    const {title, content} = req.body;
    //console.log(title)
    try {
        if(!mongoose.Types.ObjectId.isValid(id))
        res.json({
            success: 0,
            message: `The id ${id} is not valid`
        })
        await Note.findByIdAndUpdate(id, {title: title, content: content})
        res.status(201).json({
            success: 1,
            message: "Note updated!"
        })
    } catch (error) {
        res.status(409).json({
            success: 0,
            message: error.message
        })
    }
}