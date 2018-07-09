import React from "react";
import { PublicLayout, FavsContainer } from "../../../components";

const FavsPage = () => {
  return (
    <PublicLayout>
      <h3>Click to Remove a Favorite</h3>
      <FavsContainer />
    </PublicLayout>
  );
};

export default FavsPage;
