import { AllUsers, deleteUserController } from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import express from "express";

//router object
const router = express.Router();

//admin-users
router.get('/Allusers',requireSignIn,isAdmin,AllUsers);

//user-delete
router.delete("/delete-user/:id",requireSignIn,isAdmin,deleteUserController)

export default router;