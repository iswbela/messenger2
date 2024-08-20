import express from 'express'; 
import dotenv from 'dotenv';

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running on http://localhost:${PORT}`);
});