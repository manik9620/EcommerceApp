import userModel from "../models/userModel.js";

export const AllUsers = async (req,res) => {
    try{
      const users = await userModel.find({ role: 0 }).populate("name").populate("email").populate("phone").populate("address");
      res.status(200).send({
        success: true,
        counTotal: users.length,
        message: "All Users ",
        users,
      })
    }
    catch(error){
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error while Getting users",
        error,
      })
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const {id} = req.params;
      await userModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "User Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting user",
        error,
      });
    }
};