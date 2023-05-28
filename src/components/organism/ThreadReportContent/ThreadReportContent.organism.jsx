import React from "react";
import Information from "../../../assets/information.svg";
import { DummyNavbar } from "../../atoms";
import { DummySidebar } from "../../atoms";
import { DummySearchbar } from "../../atoms";
import { CounterThreadReport } from "../../molecules";
import { ThreadReportCard } from "..";
import "../../../styles/global.css";

const ThreadReportContent = () => {
  return (
    <div>
      <div className="navbar-container">
        <DummyNavbar />
      </div>
      <div className="main-container flex">
        <div className="sidebar-container">
          <DummySidebar />
        </div>
        <div className="content-container ">
          <section>
            <div>
              <div className="flex">
                <h3 className="text-2xl mr-3">Thread Report</h3>
                <img src={Information} alt="" className="mt-1" />
              </div>
              <CounterThreadReport />
              <DummySearchbar />
              <ThreadReportCard />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThreadReportContent;
