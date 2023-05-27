import React from 'react'
import { UserList } from '../../components/organisms'

function TotalUser() {
    return (
        <div>
            <UserList Name='John Doe' Status='Aman' isUserBlocked={false} isUserMuted={false} />
        </div>
    )
}

export default TotalUser