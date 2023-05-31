import React from 'react'
import { UserProfile } from '../../molecules'

function Users({ Name, Status, isUserBlocked, isUserMuted }) {
    return (
        <div className='flex justify-center'>
            <div className='grid grid-rows-6 gap-[27.5px]'>
                <UserProfile Name={Name} Status={Status} isUserBlocked={isUserBlocked} isUserMuted={isUserMuted} />
                <UserProfile Name={Name} Status={Status} isUserBlocked={isUserBlocked} isUserMuted={isUserMuted} />
                <UserProfile Name={Name} Status={Status} isUserBlocked={isUserBlocked} isUserMuted={isUserMuted} />
                <UserProfile Name={Name} Status={Status} isUserBlocked={isUserBlocked} isUserMuted={isUserMuted} />
                <UserProfile Name={Name} Status={Status} isUserBlocked={isUserBlocked} isUserMuted={isUserMuted} />
                <UserProfile Name={Name} Status={Status} isUserBlocked={isUserBlocked} isUserMuted={isUserMuted} />
            </div>

        </div>
    )
}

export default Users