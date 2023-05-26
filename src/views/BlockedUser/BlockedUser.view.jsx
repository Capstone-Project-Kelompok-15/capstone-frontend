import React from 'react'
import { UserList } from '../../components/organisms'

function BlockedUser() {
    return (
        <div>
            <UserList Name='John Doe' Status='Terblokir' isUserBlocked={true} isUserMuted={false} />
        </div>
    )
}

export default BlockedUser