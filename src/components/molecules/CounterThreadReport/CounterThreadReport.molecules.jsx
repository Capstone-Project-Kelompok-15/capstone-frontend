import React from "react"

function CounterThreadReport() {
    return (
        <div>
            <div
                id="container_middle"
                className="rounded-md mt-3 flex justify-center items-center h-24 w-[1210px] bg-white shadow-md my-4">
                <div>
                    <p
                        id="jumlahlaporanthread"
                        className="font-source-sans font-normal text-[16px] text-center bg-white">
                        999
                    </p>
                    <p
                        id="detaillaporanthread"
                        className="font-source-sans font-normal text-[16px]  text-center bg-white">
                        Jumlah Laporan Thread
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CounterThreadReport
