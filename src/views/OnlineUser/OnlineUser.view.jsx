import React from 'react'
import { UserList } from '../../components/organisms'

function OnlineUser() {
    return (
        <div>
            <UserList Name='John Doe' Status='Aman' isUserBlocked={false} isUserMuted={false} />
        </div>
    )
}

export default OnlineUser