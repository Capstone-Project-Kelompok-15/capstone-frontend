import React from 'react'
import { UserProfile } from '../../molecules'

function UserList({ Name, Status, isUserBlocked, isUserMuted, handleMuteClick, handleBlockClick }) {
    return (
        <div className='flex justify-center'>
            <div className='grid gap-[27.5px]'>
                <UserProfile
                    Name={Name}
                    Status={Status}
                    isUserBlocked={isUserBlocked} isUserMuted={isUserMuted}
                    handleBlockClick={handleBlockClick}
                    handleMuteClick={handleMuteClick}
                />
            </div>

        </div>
    )
}

export default UserList