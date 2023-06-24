import axios from "axios"

export const ThreadsSlice = (set) => ({
    threadList: [],

    deletethread: async (token, id) => {
        console.log(token,id)
        try { 
            await axios.delete(
            `https://capstone-production-c8c9.up.railway.app/admin/threads/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            
        } catch (error) {
            console.log(error)
            
        }
    },

    fetchThread: async (token, title) => {
        try {
            const res = await axios.get(
                `https://capstone-production-c8c9.up.railway.app/threads?=${title}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.status === 200) {
                console.log(res.data.thread)
                set({
                    threadList: res.data.thread,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },

    fetchThreads: async (token) => {
        try {
            const res = await axios.get(
                "https://capstone-production-c8c9.up.railway.app/admin/threads",
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