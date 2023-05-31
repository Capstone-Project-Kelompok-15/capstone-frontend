import React from "react";
import DenyVector from "../../../assets/deny.svg";
const DenyButton = () => {
  return (
    <div className="deny-button grid w-12 justify-items-center mx-3">
      <img src={DenyVector} alt="" />
      <button>Tolak Laporan</button>
    </div>
  );
};

export default DenyButton;
