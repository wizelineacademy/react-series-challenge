import React from "react";
import { Header } from "../../../components";
import PropTypes from "prop-types";

const PublicLayout = ({ children }) => (
  <div style={{ height: "100%" }}>
    <Header />
    <div>{children}</div>
  </div>
);

PublicLayout.propTypes = {
  children: PropTypes.node
};

export default PublicLayout;
