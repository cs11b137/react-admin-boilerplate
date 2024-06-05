// src/layouts/Header.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div>Admin Template</div>
      <div>
        <span>Welcome, {user.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
