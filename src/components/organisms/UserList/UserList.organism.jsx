import React from 'react'
import { UserProfile } from '../../molecules'

function UserList(
    {
        Name,
        Status,
        isUserBlocked,
        isUserMuted,
        handleModalMute,
        handleModalBlock,
        isExpand,
    }) {
    return (
        <div>
            <div className={isExpand ? 'flex ml-[300px]' : 'flex justify-center'}>
                <div className='grid gap-[27.5px]'>
                    <UserProfile
                        Name={Name}
                        Status={Status}
                        isUserBlocked={isUserBlocked}
                        isUserMuted={isUserMuted}
                        handleModalMute={handleModalMute}
                        handleModalBlock={handleModalBlock}
                        isExpand={isExpand}
                    />
                </div>
            </div>

        </div>
    )
}

export default UserList