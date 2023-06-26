import React from "react"
import { DeleteSearchHistoryButton, SearchButton } from "../../atoms"
import SearchHistory from "../SearchHistory/SearchHistory.molecule"

function SearchBar({
    heading,
    isFocused,
    handleSearch,
    handleKeyPress,
    formik,
    isExpand,
    handleDeleteSearchHistory,
    searchHistories,
    handleClickSearchHistory,
    handleOnFocus,
    handleOnBlur,
}) {
    return (
        <div className="w-full mt-[16px]">
            {isFocused ? (
                <div
                    className={
                        isExpand
                            ? "w-full rounded-[12px] bg-[#FFFFFF] border border-[#012269]"
                            : "w-full rounded-[12px] bg-[#FFFFFF] border border-[#012269]"
                    }>
                    <div className={isExpand ? "flex" : "flex gap-[12px]"}>
                        <SearchButton handleSearch={handleSearch} />
                        <div className="w-full flex justify-between">
                            <form
                                className="mt-[9px] mb-[9px] w-full"
                                onKeyPress={handleKeyPress}>
                                <input
                                    type="text"
                                    name="searchValue"
                                    onBlur={handleOnBlur}
                                    className="w-full focus:outline-none pl-[10px]"
                                    value={formik.values.searchValue}
                                    onChange={formik.handleChange}
                                />
                            </form>
                            <DeleteSearchHistoryButton
                                handleDeleteSearchHistory={
                                    handleDeleteSearchHistory
                                }
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <hr className="w-full" />
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
                            ? "w-full h-[36px] rounded-[12px] bg-[#0122691a]"
                            : "w-full h-[36px] rounded-[12px] bg-[#0122691a]"
                    }>
                    <div
                        className={
                            isExpand
                                ? "flex gap-[12px] relative z-0"
                                : "flex gap-[12px] relative z-0"
                        }>
                        <SearchButton handleSearch={handleSearch} />
                        <button
                            className="w-full mt-[8px] mb-[8px]"
                            type="button"
                            onClick={handleOnFocus}>
                            <p className="font-source-sans font-normal absolute left-[48px] top-[8.5px] text-[#000000CC] text-[14px]">
                                {heading}
                            </p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchBar
