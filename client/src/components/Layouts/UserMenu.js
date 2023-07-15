import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group" style={{ fontSize: "20px" }}>
          <h1>User Panel</h1>
          <br />
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action "
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
