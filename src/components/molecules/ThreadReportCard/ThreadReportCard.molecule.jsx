import React from "react"
import { AcceptButton, DenyButton, ViewButton } from "../../atoms"

function ThreadReportCard({
    handleAcceptClick,
    handleDenyClick,
    thread,
}) {
    return (
        <div>
            <div className="thread-card mt-3  flex h-16 items-center w-full">
                <div>
                    <img
                        src={thread.thread_picture}
                        alt="threadpicture"
                        className="h-[50px] w-[50px] rounded-[100px]"
                    />
                </div>
                <div className="font-source-sans font-bold text-[12px] mx-3.5 flex-1">
                    <h6 className="font-source-sans font-bold text-[12px]">
                        {thread.title}
                    </h6>
                    <p className="font-source-sans font-bold text-[12px] text-[#AA1512]">
                        {thread.tag}
                    </p>
                </div>
                <div className="flex">
                    <ViewButton report={thread} />
                    <AcceptButton onClick={() => handleAcceptClick(thread)} />
                    <DenyButton onClick={() => handleDenyClick(thread.id)} />
                </div>
            </div>
        </div>
    )
}

export default ThreadReportCard
