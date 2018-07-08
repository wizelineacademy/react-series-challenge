import React from "react";
import { PublicLayout, TrendingContainer } from "../../../components";

const HomePage = ({ ...props }) => {
  return (
    <PublicLayout>
      <TrendingContainer />
    </PublicLayout>
  );
};

export default HomePage;
