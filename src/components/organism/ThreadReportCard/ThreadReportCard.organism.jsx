import React from "react";
import { AcceptButton } from "../../atoms";
import { DenyButton } from "../../atoms";
import AvatarImage from "../../../assets/avatar.svg";
import "../../../styles/global.css";

const ThreadReportCard = () => {
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
        <div className="flex">
          <AcceptButton />
          <DenyButton />
        </div>
      </section>
    </div>
  );
};

export default ThreadReportCard;
