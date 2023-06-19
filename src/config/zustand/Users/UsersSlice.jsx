import axios from "axios";

export const UsersSlice = set => ({
    userList: [],
    fetchUsers: async () => {
        try {
            const res = await axios.get("http://54.206.29.131:8000/admin", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`
                }
            })

            if (res.status === 200) {
                console.log(res.data.data.users);
                set({ userList: res.data.users })
            }
        } catch (error) {
            console.log(error);
        }
    }
})