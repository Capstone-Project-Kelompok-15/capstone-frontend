import users from "../../dummyData/userList";

const MutedUserViewModel = () => {
    const mutedUsers = users.filter(user => user.mute_status)

    return {
        mutedUsers,
    }
}

export default MutedUserViewModel;