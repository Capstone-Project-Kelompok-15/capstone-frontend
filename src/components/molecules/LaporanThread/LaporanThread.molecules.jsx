import React from "react"
import { useLocation } from "react-router-dom"
import { useStore } from "../../../config/zustand/store"

function LaporanThread({ isExpand }) {
    const location = useLocation()
    const { report } = useStore((state) => state)
    const filterData = report.filter((list) => list.accept_status === true)

    let threadTotal = ""
    if (location.pathname.startsWith("/thread/report")) {
        threadTotal = filterData.length
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
            className={
                isExpand
                    ? "rounded-md mt-6 flex justify-center w-[1060px] items-center h-24 bg-white shadow-lg rounded-[10px]"
                    : "rounded-md mt-6 ml-3 flex justify-center w-[1210px] items-center h-24 bg-white shadow-lg rounded-[10px]"
            }>
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
