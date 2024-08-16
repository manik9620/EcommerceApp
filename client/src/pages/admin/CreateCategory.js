import React, { useEffect, useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { Notyf } from "notyf";
import AdminMenu from "../../components/Layouts/AdminMenu";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import { motion } from "framer-motion";

const CreateCategory = (props) => {
  const [categories, setCategories] = useState();
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: "center",
      y: "top",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/v1/category/create-category`, {
        name,
      });
      if (data?.success) {
        notyf.success(`${name} is created`);
        getAllCategory();
      } else {
        notyf.error(data.message);
      }
    } catch (error) {
      console.log(error);
      notyf.error("somthing went wrong in input form");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/get-allcategory`);
      if (data?.success) {
        setCategories(data?.allcat);
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllCategory();
    // eslint-disable-next-line
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        notyf.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        notyf.error(data.message);
      }
    } catch (error) {
      notyf.error("Somtihing went wrong in Updating");
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        notyf.success(`category is deleted`);

        getAllCategory();
      } else {
        notyf.error(data.message);
      }
    } catch (error) {
      notyf.error("Somtihing went wrong");
    }
  };
  return (
    <>
      <Layout title="EzCart - Create Category" />

      <motion.div
        className={`container-fluid  bg-${props.mode} pt-3`}
        style={{ minHeight: "100vh" }}
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <motion.div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 pt-5" style={{ fontSize: "25px" }}>
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CreateCategory;
