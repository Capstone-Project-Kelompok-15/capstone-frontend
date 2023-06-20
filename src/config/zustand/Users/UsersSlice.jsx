import axios from "axios";

export const UsersSlice = set => ({
    userList: [],
    fetchUsers: async (token) => {
        try {
            const res = await axios.get("http://54.206.29.131:8000/admin", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (res.status === 200) {
                console.log(res.data.users);
                set({
                    userList: res.data.users
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
})