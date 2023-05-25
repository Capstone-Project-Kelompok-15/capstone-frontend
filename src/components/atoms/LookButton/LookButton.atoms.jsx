import React from "react";
import LookVector from "../../../assets/eye-Vector.svg";
import "../atoms.css";

const LookButton = () => {
  return (
    <div className="look-button grid h-16 w-12">
      <img src={LookVector} alt="" />
      <button>Lihat Thread</button>
    </div>
  );
};

export default LookButton;
