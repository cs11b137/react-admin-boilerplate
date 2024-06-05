// src/layouts/Layout.js
import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LayoutContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Sidebar />
    <LayoutContent>
      <Header />
      {children}
    </LayoutContent>
  </LayoutWrapper>
);

export default Layout;
