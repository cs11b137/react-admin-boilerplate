// src/components/UserList.js
import React, { memo } from "react";
import Table from "./Table";

const UserList = memo(({ users }) => {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
  ];

  return <Table columns={columns} dataSource={users} rowKey="id" />;
});

export default UserList;
