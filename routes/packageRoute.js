import express from 'express';
import { packageList, appointmentComplete } from '../controllers/packageController.js'

const packageRouter = express.Router();

packageRouter.get("/list", packageList)
packageRouter.post("/complete-appointment", appointmentComplete)

export default packageRouter;