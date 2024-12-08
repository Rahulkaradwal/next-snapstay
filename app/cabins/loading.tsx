import React from "react";
import SpinnerMini from "../_components/spinner-mini";

function loading() {
  return (
    <div className="grid  items-center justify-center">
      <SpinnerMini />
      <p className="text-lg text-primary-200">Loading cabins...</p>
    </div>
  );
}

export default loading;
