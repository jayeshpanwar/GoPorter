import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json()); // Use Express JSON parser
app.use(express.urlencoded({ extended: true })); 

import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
app.use (cors());

app.use("/user", userRouter);
app.use("/category", categoryRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});