import express  from "express";
const libro = express();
import { getLibro, postLibro, putLibro, deleteLibro } from "../controllers/apiLibrosControllers.js";



libro.get('', getLibro )

libro.post('', postLibro )

libro.put('/:id', putLibro )

libro.delete('/:id', deleteLibro )

export { libro }