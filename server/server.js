import express from 'express'; 
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running on http://localhost:${PORT}`);
});