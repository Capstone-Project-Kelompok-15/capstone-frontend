import React from "react";
import DenyVector from "../../../assets/deny.svg";
import "../../../styles/global.css";

const DenyButton = () => {
  return (
    <div className="deny-button grid w-12">
      <img src={DenyVector} alt="" />
      <button>Tolak Laporan</button>
    </div>
  );
};

export default DenyButton;
