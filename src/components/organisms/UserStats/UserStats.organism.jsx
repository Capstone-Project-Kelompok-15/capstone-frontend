import React from "react"
import { CardStats } from "../../molecules"
import { TooltipButton } from "../../atoms"

function UserStats({
    isExpand,
    heading,
    onlineUsersCount,
    usersCount,
    blockedUsersCount,
    mutedUsersCount,
    pageID,
}) {
    return (
        <div>
            <div className="flex items-center gap-3">
                <p
                    className="font-source-sans font-semibold text-[20px] text-[#000000CC]"
                    id={pageID}>
                    {heading}
                </p>
                <TooltipButton />
            </div>

            <div className="flex justify-between mt-[21px] w-full">
                <CardStats
                    statsNumber={usersCount}
                    statsTitle="Jumlah Pengguna"
                    Link="/manageUser/total"
                    id="total-users"
                    isExpand={isExpand}
                />
                <CardStats
                    statsNumber={onlineUsersCount}
                    statsTitle="Pengguna Online"
                    Link="/manageUser/online"
                    id="online-users"
                    isExpand={isExpand}
                />
                <CardStats
                    statsNumber={blockedUsersCount}
                    statsTitle="Jumlah Pengguna yang diblokir"
                    Link="/manageUser/blocked"
                    id="blocked-users"
                    isExpand={isExpand}
                />
                <CardStats
                    statsNumber={mutedUsersCount}
                    statsTitle="Jumlah Pengguna yang dimute"
                    Link="/manageUser/muted"
                    id="muted-users"
                    isExpand={isExpand}
                />
            </div>
        </div>
    )
}

export default UserStats
