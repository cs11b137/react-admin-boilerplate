// src/components/__tests__/Table.test.js
import React from "react";
import { shallow } from "enzyme";
import Table from "../Table";

describe("Table", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Table />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with columns and data", () => {
    const columns = [
      { title: "Name", dataIndex: "name" },
      { title: "Age", dataIndex: "age" },
    ];
    const dataSource = [
      { key: 1, name: "John", age: 30 },
      { key: 2, name: "Jane", age: 25 },
    ];
    const wrapper = shallow(
      <Table columns={columns} dataSource={dataSource} />
    );
    expect(wrapper.find("tbody tr").length).toBe(2);
  });
});
