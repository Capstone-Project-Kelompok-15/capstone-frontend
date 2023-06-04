import React from 'react'
import { UserList } from '../../components/organisms'
import BlockedUserViewModel from './BlockedUser.viewModel'

function BlockedUser() {
    const viewModel = BlockedUserViewModel()

    return (
        <div>
            {
                viewModel.blockedUsers.map(user => (
                    <UserList key={user.id} Name={user.name} Status="Terblokir" isUserBlocked={user.block_status} isUserMuted={user.mute_status} />
                ))
            }
        </div>
    )
}

export default BlockedUser