import React from 'react'
import { UserList } from '../../components/organisms'
import OnlineUserViewModel from './OnlineUser.viewModel'

function OnlineUser() {
    const viewModel = OnlineUserViewModel()

    console.log({block: viewModel.blockModalState, mute: viewModel.muteModalState});

    return (
        <div>
            <UserList Name="John Doe" Status="Aman" isUserBlocked={false} isUserMuted={false}  />
        </div>
    )
}

export default OnlineUser