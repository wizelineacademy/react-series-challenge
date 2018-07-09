import React from "react";
import { PublicLayout, FavsContainer } from "../../../components";

const FavsPage = () => {
  return (
    <PublicLayout>
      <h4>Click to Remove a Favorite</h4>
      <FavsContainer />
    </PublicLayout>
  );
};

export default FavsPage;
