import React from "react"
import { DeleteButton, ViewButton } from "../../atoms"

function ThreadList({ isExpand, thread, handleAcceptClick }) {
    return (
        <div>
            <div
                className={
                    isExpand
                        ? "thread-card mt-4 flex h-16 items-center w-[1180px]"
                        : "thread-card mt-4 flex h-16 items-center w-[1210px]"
                }
                key={thread.id}>
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
                    <p className="font-source-sans font-normal text-[12px]">
                        {thread.description}
                    </p>
                </div>
                <div className="flex">
                    <ViewButton report={thread} />
                    <DeleteButton
                        handleClick={() => handleAcceptClick(thread.id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ThreadList
