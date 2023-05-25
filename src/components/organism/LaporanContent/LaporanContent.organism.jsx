import React from "react";
import { DummyNavbar } from "../../atoms";
import { DummySidebar } from "../../atoms";
import { CounterLaporan } from "../../molecules";
import { CardLaporan } from "../../organism";
import { SearchInput } from "../../atoms";
import "../organism.css";

const LaporanContent = () => {
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
              <h1 className="report-title text-xl">Thread Report</h1>
              <CounterLaporan />
              <SearchInput />
              <CardLaporan />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LaporanContent;
