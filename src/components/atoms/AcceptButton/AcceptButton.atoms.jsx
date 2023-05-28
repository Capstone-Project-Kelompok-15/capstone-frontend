import React from "react";
import AcceptVector from "../../../assets/accept.svg";
import "../../../styles/global.css";

const AcceptButton = () => {
  return (
    <div className="accept-button grid w-12">
      <img src={AcceptVector} alt="" />
      <button>Setujui Laporan</button>
    </div>
  );
};

export default AcceptButton;
