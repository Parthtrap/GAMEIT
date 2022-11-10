import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import authRoutes from "./routes/auth.js"
import communityRoute from "./routes/community.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/community', communityRoute)


const CONNECTION_URL = 'mongodb+srv://Parthtrap:Md+90=100@cluster1.iktpdhw.mongodb.net/gameit?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port : ${PORT}`)))
    .catch((error) => console.log(error.message));