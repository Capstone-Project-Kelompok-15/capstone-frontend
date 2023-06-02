import React from "react";
import { AcceptButton, DenyButton } from "../../atoms";
import AvatarImage from "../../../assets/avatar.svg";

function ThreadReportCard() {
  return (
    <div>
      <section className="thread-card mt-4 flex h-16 items-center">
        <div>
          <img src={AvatarImage} alt="" />
        </div>
        <div className="card-detail mx-3.5 flex-1">
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
}

export default ThreadReportCard;
