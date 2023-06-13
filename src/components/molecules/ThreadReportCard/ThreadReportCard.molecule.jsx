import React from "react"
import {
    AcceptButton,
    DenyButton,
    ViewButton,
    ThreadPicture,
} from "../../atoms"

function ThreadReportCard() {
    return (
        <div>
            <div className="thread-card mt-4 flex h-16 items-center w-[1210px]">
                <div>
                    <ThreadPicture />
                </div>
                <div className="font-source-sans font-bold text-[12px] mx-3.5 flex-1">
                    <h6>UU Tenaga Kerja</h6>
                    <p className="text-[#AA1512]">#kekerasan</p>
                </div>
                <div className="flex ">
                    <ViewButton />
                    <AcceptButton />
                    <DenyButton />
                </div>
            </div>
        </div>
    )
}

export default ThreadReportCard
