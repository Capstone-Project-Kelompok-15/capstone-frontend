import React from "react"
import { ProfilePicture, Button } from "../../atoms"

function UserProfile({
    Name,
    Status,
    MuteDuration,
    isUserBlocked,
    isUserMuted,
    handleModalBlock,
    handleModalMute,
    isExpand,
    img,
}) {
    const statusCondition = {
        Aman: "font-source-sans font-semibold text-[12px] text-[#30B221]",
        Muted: "font-source-sans font-semibold text-[12px] text-[#D18102]",
        Terblokir: "font-source-sans font-semibold text-[12px] text-[#AA1512]",
    }

    return (
        <div
            className={
                isExpand
                    ? "w-full h-[69px] flex mt-[16px]"
                    : "w-full h-[69px] flex mt-[16px]"
            }>
            <ProfilePicture
                isUserBlocked={isUserBlocked}
                isUserMuted={isUserMuted}
                isExpand={isExpand}
                img={img}
            />

            <div className="w-full h-[34px] mt-[17.5px] mr-[14px]">
                <h1 className="font-source-sans font-semibold text-[12px]">
                    {Name}
                </h1>
                <p className={statusCondition[Status]}>
                    {Status} {MuteDuration}
                </p>
            </div>

            {isUserBlocked && (
                <>
                    <Button
                        handleClick={handleModalMute}
                        buttonDesc="Mute Pengguna"
                        img="mute"
                        altImg="mute user"
                        id="mute-user"
                    />

                    <Button
                        handleClick={handleModalBlock}
                        buttonDesc="Buka Blokir"
                        img="unblock"
                        altImg="unblock user"
                        id="unblock-user"
                    />
                </>
            )}

            {isUserMuted && (
                <>
                    <Button
                        handleClick={handleModalMute}
                        buttonDesc="Buka Mute"
                        img="unmute"
                        altImg="unmute user"
                        id="unmute-user"
                    />

                    <Button
                        handleClick={handleModalBlock}
                        buttonDesc="Blokir User"
                        img="block"
                        altImg="block user"
                        id="block-user"
                    />
                </>
            )}

            {!isUserBlocked && !isUserMuted && (
                <>
                    <Button
                        handleClick={handleModalMute}
                        buttonDesc="Mute Pengguna"
                        img="mute"
                        altImg="mute user"
                        id="mute-user"
                    />

                    <Button
                        handleClick={handleModalBlock}
                        buttonDesc="Blokir User"
                        img="block"
                        altImg="block user"
                        id="block-user"
                    />
                </>
            )}
        </div>
    )
}

export default UserProfile
