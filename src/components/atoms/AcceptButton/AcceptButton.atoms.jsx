import React from "react";
import AcceptVector from "../../../assets/accept.svg";

const AcceptButton = () => {
  return (
    <div className="accept-button grid w-12 justify-items-center mx-3">
      <img src={AcceptVector} alt="" />
      <button>Setujui Laporan</button>
    </div>
  );
};

export default AcceptButton;
