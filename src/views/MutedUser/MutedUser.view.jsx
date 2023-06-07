import React from 'react'
import { UserList } from '../../components/organisms'
import MutedUserViewModel from './MutedUser.viewModel'

function MutedUser() {
  const viewModel = MutedUserViewModel()

  return (
    <div>
      {
        viewModel.mutedUsers.map(user => (
          <UserList key={user.id} Name={user.name} Status="Muted" isUserBlocked={user.block_status} isUserMuted={user.mute_status} />
        ))
      }
    </div>
  )
}

export default MutedUser