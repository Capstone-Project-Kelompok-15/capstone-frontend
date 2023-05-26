import React from 'react'
import { UserList } from '../../components/organisms'

function MutedUser() {
  return (
    <div>
        <UserList Name='John Doe' Status='Muted' isUserBlocked={false} isUserMuted={true} />
    </div>
  )
}

export default MutedUser