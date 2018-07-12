import React from "react";
import PublicLayout from "../../layouts/PublicLayout/index";
import FavsContainer from "../../containers/FavsContainer/index";

const FavsPage = () => {
  return (
    <PublicLayout>
      <h3>Click to Remove a Favorite</h3>
      <FavsContainer />
    </PublicLayout>
  );
};

export default FavsPage;
