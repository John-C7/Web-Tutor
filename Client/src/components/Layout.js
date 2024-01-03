// src/components/Layout.js
import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
