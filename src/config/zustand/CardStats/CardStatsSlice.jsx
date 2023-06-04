import users from "../../../dummyData/userList"

export const CardStatsSlice = set => ({
    totalUsers: users.length,
    totalOnlineUsers: users.filter(user => user.online_status).length,
    totalBlockedUsers: users.filter(user => user.mute_status).length,
    totalMutedUsers: users.filter(user => user.block_status).length,
})