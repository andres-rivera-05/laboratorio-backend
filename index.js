import  express from "express";
import { libro } from "./routes/apiLibros.js";
import cors from 'cors';
const app = express();

app.use(express.json());

const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));

const port=4000;

app.use('/api/libro', libro)

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`)
})