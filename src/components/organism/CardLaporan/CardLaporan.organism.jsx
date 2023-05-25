import React from "react";
import { ApproveButton } from "../../atoms";
import { DenyButton } from "../../atoms";
import { LookButton } from "../../atoms";
import AvatarImage from "../../../assets/Avatar.svg";
import "../organism.css";

const CardLaporan = () => {
  return (
    <div>
      <section className="thread-card mt-4 flex h-16 items-center">
        <div>
          <img src={AvatarImage} alt="" />
        </div>
        <div className="card-detail">
          <h6>UU Tenaga Kerja</h6>
          <p>
            Saya mau ikut-ikutan menjawab, walaupun sudah telat, masih boleh
            kan??
          </p>
        </div>
        <div className="card-button flex">
          <LookButton />
          <ApproveButton />
          <DenyButton />
        </div>
      </section>
    </div>
  );
};

export default CardLaporan;
