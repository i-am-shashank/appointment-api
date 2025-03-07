import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js';
import packageRouter from './routes/packageRoute.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors({ origin: '*' }))


app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/package', packageRouter);

app.get('/', (req, res) => {
  res.send({ success: true });
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));

export default app;
