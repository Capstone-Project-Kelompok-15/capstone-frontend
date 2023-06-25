import axios from "axios"

export const ThreadsSlice = (set, get) => ({
    threadList: [],

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
                set({
                    threadList: res.data.data,
                })
            }
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

    deletethread: async (token, id) => {
        try { 
            const res = await axios.delete(
            `https://capstone-production-c8c9.up.railway.app/admin/threads/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

            if (res.status === 200) {
                get().fetchThreads()
                console.log(res.data.thread)
                set({
                    threadList: res.data.thread,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
    
})