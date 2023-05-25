import React from "react";
import SearchButton from "../../../assets/search-Vector.svg";
import xButton from "../../../assets/xVector.svg";
import "../atoms.css";

const SearchInput = () => {
  return (
    <div>
      <div className="search-container h-8 flex justify-center items-center">
        <img className="h-4 w-4 m-4" src={SearchButton} alt="" />
        <input
          className="search-input bg-transparent text-black"
          type="search"
          name=""
          id=""
          placeholder="Cari pengguna"
        />
        <img className="h-4 w-4 m-4" src={xButton} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;
