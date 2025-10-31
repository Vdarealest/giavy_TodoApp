import express from 'express';
import tasksRoute from './routes/tasksRouters.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT || 5001
const __dirname = path.resolve();

dotenv.config();

const app = express();


//middlewares
app.use(express.json());

app.use(cors({origin:"http://localhost:5173"}));

app.use("/api/tasks", tasksRoute);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
}
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server bắt đầu trên cổng ${PORT}`);
    });
});






