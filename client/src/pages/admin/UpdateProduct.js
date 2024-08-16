import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import AdminMenu from "../../components/Layouts/AdminMenu";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import { Notyf } from "notyf";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "center",
    y: "top",
  },
});

const { Option } = Select;
const UpdateProduct = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setId(data.product._id);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

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

  //Update Product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("price", price);
      productData.append("description", description);
      productData.append("quantity", quantity);
      // productData.append("shipping",shipping)
      productData.append("category", category);
      photo && productData.append("photo", photo);

      const { data } = axios.put(
        `/api/v1/product/Update-product/${id}`,
        productData
      );
      if (data?.success) {
        notyf.error(data?.message);
      } else {
        notyf.success("Prodcut Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      let a = prompt("Type 'YES' to delete the product");
      if (a === "YES") {
        const { data } = await axios.delete(
          `/api/v1/product/delete-product/${id}`
        );
        notyf.success("Product deleted successfully");
        navigate("/dashboard/admin/products");
      } else {
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };
  return (
    <>
      <Layout title="EzCart - Update Product" />

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
            <h1>Update Product</h1>
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
                value={category}
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
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    ></img>
                  </div>
                ) : (
                  <div className="text-center">
                    {id ? (
                      <img
                        src={`/api/v1/product/product-photo/${id}`}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      ></img>
                    ) : (
                      ""
                    )}
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
                  value={shipping ? "yes" : "no"}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update Product
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete Product
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

export default UpdateProduct;
