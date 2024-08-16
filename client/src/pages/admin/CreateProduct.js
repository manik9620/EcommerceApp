import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import AdminMenu from "../../components/Layouts/AdminMenu";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import { Notyf } from "notyf";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "center",
    y: "top",
  },
});

const { Option } = Select;
const CreateProduct = (props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");

  // Get all catergory function
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/get-allcategory`);
      if (data?.success) {
        setCategories(data?.allcat);
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
    // eslint-disable-next-line
  }, []);

  //create Product
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("price", price);
      productData.append("description", description);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);
      productData.append("category", category);
      productData.append("photo", photo);

      const { data } = axios.post(
        `/api/v1/product/create-product`,
        productData
      );
      if (data?.success) {
        notyf.error(data?.message);
      } else {
        notyf.success("Prodcut created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout title="EzCart - Create Product" />

      <motion.div
        className={`container-fluid  bg-${props.mode} pt-3`}
        style={{ minHeight: "100vh" }}
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 pt-5" style={{ fontSize: "25px" }}>
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    ></img>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write the description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CreateProduct;
