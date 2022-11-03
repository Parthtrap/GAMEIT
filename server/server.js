import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

const CONNECTION_URL = 'mongodb+srv://Parthtrap:Md+90=100@cluster1.iktpdhw.mongodb.net/fuhbsif?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port : ${PORT}`)))
    .catch((error) => console.log(error.message));