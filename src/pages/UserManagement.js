// src/pages/UserManagement.js
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import UserList from "../components/UserList";
import { getUsers } from "../services/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      <h2>User Management</h2>
      <UserList users={users} />
    </Layout>
  );
};

export default UserManagement;
