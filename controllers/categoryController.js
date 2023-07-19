import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const CreateCategoryController = async (req,res) =>{
    try {
        const {name} = req.body;
        if(!name){return res.status(401).send({message: "Category name is requied"})}
        let existingcategory = await categoryModel.findOne({name});
        if(existingcategory){
            return res.status(200).send({
                success : false,
                message: "Category already exist"
            })
        }
        const created = await new categoryModel({name,slug:slugify(name)}).save();

        res.status(200).send({
            success : true,
            message: "Category created sucessfully",
            created,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message: "Error in creating Category"
        })
    }
};


export const UpdateCategoryController = async (req,res) =>{
    try {
        const {name} = req.body;
        const {id} = req.params;
        const updated = await categoryModel.findByIdAndUpdate(id,{name,slug: slugify(name)},{new:true});
        res.status(200).send({
            success: true,
            message:"category Updated successfully.",
            updated
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message: "Error while updating category"
        })
    }
};



export const getallCategoryController = async (req,res) =>{
    try {
        let allcat = await categoryModel.find();
        res.status(200).send({
            success: true,
            message:"All category is visible",
            allcat
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message: "Error while getting all category"
        })
    }
};



export const getSingleCategoryControllet = async (req,res) =>{
    try {
        const {slug} = req.params;
        const singlecat = await categoryModel.findOne({slug});
        res.status(200).send({
            success: true,
            message:"Single category is visible",
            singlecat
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message: "Error while getting single category"
        })
    }
};



export const DeleteCategoryController = async (req,res) =>{
    try {
        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message:"category Deleted successfully."
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message: "Error while deleting category"
        })
    }
};

