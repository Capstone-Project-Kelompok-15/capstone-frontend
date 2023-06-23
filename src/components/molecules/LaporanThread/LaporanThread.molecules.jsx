import React from "react"
import { useLocation } from "react-router-dom"

function LaporanThread() {
    const location = useLocation()

    let threadTotal = ""
    if (location.pathname.startsWith("/thread/report")) {
        threadTotal = "996"
    } else {
        threadTotal = "999"
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
            className="rounded-md mt-3 flex justify-center items-center h-24 w-[1210px] bg-white shadow-lg rounded-[10px]">
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
