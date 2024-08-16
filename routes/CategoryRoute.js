import  express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { CreateCategoryController, DeleteCategoryController, UpdateCategoryController, getSingleCategoryControllet, getallCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//Create catgory route
router.post("/create-category",requireSignIn,isAdmin,CreateCategoryController);

//update category
router.post("/update-category/:id",requireSignIn,isAdmin,UpdateCategoryController);

router.get("/get-allcategory",getallCategoryController);

router.get("/get-category/:slug",getSingleCategoryControllet);

router.delete("/delete-category/:id",requireSignIn,isAdmin,DeleteCategoryController);

export default router;