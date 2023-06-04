import React from 'react'
import { UserList } from '../../components/organisms'
import TotalUserViewModel from './TotalUser.viewModel'

function getStatus(user) {
    if (user.block_status) {
        return "Terblokir"
    }
    if (user.mute_status) {
        return "Muted"
    }
    return "Aman"
}



function TotalUser() {
    const viewModel = TotalUserViewModel()

    return (
        <div>
            {
                viewModel.totalUsers.map(user => (
                    <UserList key={user.id} Name={user.name} Status={
                        getStatus(user)
                    } isUserBlocked={user.block_status} isUserMuted={user.mute_status} />
                ))
            }
        </div>
    )
}

export default TotalUser