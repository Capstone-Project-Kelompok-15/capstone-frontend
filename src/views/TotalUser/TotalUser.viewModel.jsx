import users from "../../dummyData/userList";

const TotalUserViewModel = () => {
    const totalUsers = users

    return {
        totalUsers,
    }
}

export default TotalUserViewModel;