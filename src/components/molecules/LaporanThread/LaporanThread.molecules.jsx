import React from "react"
import { useLocation } from "react-router-dom"

function LaporanThread({
    isExpand,
    threadList,
}) {

    const location = useLocation()

    let threadTotal = ""
    if (location.pathname.startsWith("/thread/report")) {
        threadTotal = "996"
    } else {
        threadTotal = threadList.length
    }

    let threadDetail = ""
    if (location.pathname.startsWith("/thread/report")) {
        threadDetail = "Jumlah Laporan Thread"
    } else {
        threadDetail = "Jumlah Thread"
    }

    return (
        <div
            id="container_middle"
            className= {isExpand 
            ? "rounded-md mt-3 flex justify-center items-center h-24 w-[1180px] shadow-lg  bg-white" 
            : "rounded-md mt-3 flex justify-center items-center h-24 w-[1210px] shadow-lg  bg-white"}>
            <div>
                <p
                    id="jumlahthread"
                    className="text-center text-[16px] font-source-sans bg-white">
                    {threadTotal}
                </p>
                <p
                    id="keteranganthread"
                    className="text-center text-[16px] font-source-sans bg-white">
                    {threadDetail}
                </p>
            </div>

        </div>
    )
}

export default LaporanThread
