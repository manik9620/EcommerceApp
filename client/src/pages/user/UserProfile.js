import React from 'react'
import Layout from '../../components/Layouts/Layout';
import UserMenu from '../../components/Layouts/UserMenu'

const UserProfile = () => {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 pt-5" style={{ fontSize: "25px" }}>
            <h1>Profile of User</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile
