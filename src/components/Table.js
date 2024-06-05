// src/components/Table.js
import React from "react";
import { Table as AntdTable } from "antd";

const Table = ({ columns, dataSource, ...rest }) => (
  <AntdTable columns={columns} dataSource={dataSource} {...rest} />
);

export default Table;
