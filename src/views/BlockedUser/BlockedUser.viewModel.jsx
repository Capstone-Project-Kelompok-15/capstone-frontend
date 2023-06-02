import users from "../../dummyData/userList"

const BlockedUserViewModel = () => {
    const blockedUsers = users.filter(user => user.block_status)
    return {
        blockedUsers
    }
}

export default BlockedUserViewModel