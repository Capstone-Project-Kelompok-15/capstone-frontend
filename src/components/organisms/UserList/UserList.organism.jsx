import React from "react"
import { UserProfile } from "../../molecules"

function UserList({
    Name,
    Status,
    isUserBlocked,
    isUserMuted,
    handleModalMute,
    handleModalBlock,
    isExpand,
    MuteDuration,
    img,
}) {
    return (
        <div>
            <div className="w-full">
                <div className="grid gap-[27.5px]">
                    <UserProfile
                        Name={Name}
                        Status={Status}
                        MuteDuration={MuteDuration}
                        isUserBlocked={isUserBlocked}
                        isUserMuted={isUserMuted}
                        handleModalMute={handleModalMute}
                        handleModalBlock={handleModalBlock}
                        isExpand={isExpand}
                        img={img}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserList
