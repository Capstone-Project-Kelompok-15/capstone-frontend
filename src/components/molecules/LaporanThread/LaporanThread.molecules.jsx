import React from "react"
import { useLocation } from "react-router-dom"
import { useStore } from "../../../config/zustand/store"

function LaporanThread() {
    const location = useLocation()
    const { report } = useStore((state) => state)
    const filterData = report.filter((list) => list.accept_status)

    let threadTotal = ""
    if (location.pathname.startsWith("/thread/report")) {
        threadTotal = filterData.length
    } else {
        threadTotal = report.length
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
            className="rounded-md mt-6 flex justify-center items-center w-full  h-24 bg-white shadow-lg">
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
