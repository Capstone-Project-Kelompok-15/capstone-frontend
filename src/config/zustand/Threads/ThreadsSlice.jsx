import axios from "axios"

export const ThreadsSlice = (set) => ({
    threadList: [],
    fetchThreads: async (token) => {
        try {
            const res = await axios.get(
                "http://54.206.29.131:8000/admin/threads",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.status === 200) {
                console.log(res.data.data)
                set({
                    threadList: res.data.data,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
})