import React from "react";
import ApproveVector from "../../../assets/accept-Vector.svg";
import "../atoms.css";

const ApproveButton = () => {
  return (
    <div className="approve-button grid h-16 w-12">
      <img src={ApproveVector} alt="" />
      <button>Setujui Laporan</button>
    </div>
  );
};

export default ApproveButton;
