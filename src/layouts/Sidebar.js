// src/layouts/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Sidebar = () => (
  <Menu mode="inline">
    <Menu.Item key="dashboard">
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Item key="users">
      <Link to="/users">User Management</Link>
    </Menu.Item>
  </Menu>
);

export default Sidebar;
