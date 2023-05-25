import React from "react";
import DenyVector from "../../../assets/close-Vector.svg";
import "../atoms.css";

const DenyButton = () => {
  return (
    <div className="deny-button grid h-16 w-12">
      <img src={DenyVector} alt="" />
      <button>Tolak Laporan</button>
    </div>
  );
};

export default DenyButton;
