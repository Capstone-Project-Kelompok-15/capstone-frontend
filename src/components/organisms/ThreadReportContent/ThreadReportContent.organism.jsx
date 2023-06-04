import React from "react";
import Information from "../../../assets/information.svg";
import { DummyNavbar, DummySidebar, DummySearchbar } from "../../atoms";
import { CounterThreadReport } from "../../molecules";
import { ThreadReportCard } from "..";

function ThreadReportContent() {
  return (
    <div>
      <div className="navbar-container">
        <DummyNavbar />
      </div>
      <div className="main-container flex">
        <div className="sidebar-container">
          <DummySidebar />
        </div>
        <div className="content-container w-[1210px] mx-20">
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
}

export default ThreadReportContent;
