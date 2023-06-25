import React from "react"
import { DeleteSearchHistoryButton, SearchButton } from "../../atoms"
import SearchHistory from "../SearchHistory/SearchHistory.molecule"

function SearchBar({
    heading,
    isSearch,
    handleSearch,
    handleKeyPress,
    formik,
    isExpand,
    handleDeleteSearchHistory,
    searchHistories,
    handleClickSearchHistory,
}) {
    return (
        <div
            className={
                isExpand
                    ? "flex mt-[16px] ml-[300px]"
                    : "flex justify-center mt-[16px]"
            }>
            {isSearch ? (
                <div
                    className={
                        isExpand
                            ? "w-[1180px] rounded-[12px] bg-[#FFFFFF] border border-[#012269]"
                            : "w-[1210px] rounded-[12px] bg-[#FFFFFF] border border-[#012269]"
                    }>
                    <div className={isExpand ? "flex" : "flex gap-[12px]"}>
                        <SearchButton handleSearch={handleSearch} />
                        <form
                            className="mt-[9px] mb-[9px]"
                            onKeyPress={handleKeyPress}>
                            <input
                                type="text"
                                name="searchValue"
                                className="focus:outline-none"
                                value={formik.searchValue}
                                onChange={formik.handleChange}
                            />
                        </form>
                        <DeleteSearchHistoryButton
                            handleDeleteSearchHistory={
                                handleDeleteSearchHistory
                            }
                        />
                    </div>
                    <div className="flex justify-center">
                        <hr className="w-[1170px]" />
                    </div>
                    {searchHistories &&
                        searchHistories.map((searchHistory, id) => (
                            <SearchHistory
                                searchHistory={searchHistory}
                                key={id}
                                handleClick={() =>
                                    handleClickSearchHistory(searchHistory)
                                }
                            />
                        ))}
                </div>
            ) : (
                <div
                    className={
                        isExpand
                            ? "w-[1180px] h-[36px] rounded-[12px] bg-[#0122691a]"
                            : "w-[1210px] h-[36px] rounded-[12px] bg-[#0122691a]"
                    }>
                    <div className="flex gap-[12px]">
                        <SearchButton handleSearch={handleSearch} />
                        <div className="w-[1113.62px] mt-[8px] mb-[8px]">
                            <p className="font-source-sans font-normal text-[#000000CC] text-[14px]">
                                {heading}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchBar
