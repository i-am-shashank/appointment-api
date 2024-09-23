import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addPackage, allPackages, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/packageController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-package", authAdmin, upload.single('image'), addPackage)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-packages", authAdmin, allPackages)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;