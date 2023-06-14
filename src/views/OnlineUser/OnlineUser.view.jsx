import React from 'react'
import { UserList } from '../../components/organisms'
import OnlineUserViewModel from './OnlineUser.viewModel'

function OnlineUser() {
    const viewModel = OnlineUserViewModel()

    return (
        <div>
            {
                viewModel.onlineUsers.map(user => (
                    <UserList key={user.id} Name={user.name} Status="Aman" isUserBlocked={user.block_status} isUserMuted={user.mute_status} />
                ))
            }
        </div>
    )
}

export default OnlineUser