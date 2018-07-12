import React from "react";
import PublicLayout from "../../layouts/PublicLayout/index";
import TrendingContainer from "../../containers/TrendingContainer/index";

const HomePage = () => {
  return (
    <PublicLayout>
      <h3>Click to Add a Favorite</h3>
      <TrendingContainer />
    </PublicLayout>
  );
};

export default HomePage;
