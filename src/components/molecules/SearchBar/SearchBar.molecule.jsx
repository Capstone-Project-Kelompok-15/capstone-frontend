import React from "react"
import { DeleteSearchHistoryButton, SearchButton } from "../../atoms"

function SearchBar() {
    return (
        <div className="flex justify-center mt-[16px]">
            <div className="flex w-[1210px] h-[36px] rounded-[12px] gap-[12px] bg-[#0122691A]">
                <SearchButton />
                <div className="w-[1113.62px] mt-[8px] mb-[8px] bg-transparent">
                    <p className="font-source-sans font-normal text-[#000000CC] text-[14px] bg-transparent">
                        Cari &quot;Pengguna&quot;
                    </p>
                </div>
                <DeleteSearchHistoryButton />
            </div>
        </div>
    )
}

export default SearchBar
