// src/pages/Dashboard.js
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import Chart from "../components/Chart";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <Layout>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
    </Layout>
  );
};

export default Dashboard;
