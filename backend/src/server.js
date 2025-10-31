import express from 'express';
import tasksRoute from './routes/tasksRouters.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

const PORT = process.env.PORT || 5001

dotenv.config();

const app = express();


//middlewares
app.use(express.json());

app.use(cors({origin:"http://localhost:5173"}));

app.use("/api/tasks", tasksRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server bắt đầu trên cổng ${PORT}`);
    });
});






