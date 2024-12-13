import React from "react";
import Spinner from "../_components/spinner";

function loading() {
  return (
    <div className="grid  items-center justify-center">
      <Spinner /> <p className="text-lg text-primary-200">Loading cabins...</p>
    </div>
  );
}

export default loading;
