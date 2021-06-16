import express from 'express'
import { addNote, deleteNode, editNote, getNotes } from '../controller/notes.js';


const router = express.Router();
router.get('/', getNotes)
router.post('/', addNote)
router.delete('/:id', deleteNode)
router.put('/:id', editNote)

export default router
