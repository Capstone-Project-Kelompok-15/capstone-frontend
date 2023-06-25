import axios from "axios"

export const ThreadsSlice = (set, get) => ({
    threadList: [],

    getthread: async () => {
        try {
            const response = await axios.get(
                "https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads"
            )
            set({ threadList: response.data })
        } catch (error) {
            console.log(error)
        }
    },

    deletethread: async (id) => {
        try {
            const response = await axios.delete(
                `https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads/${id}`,
            )
            if (response.status === 200) {
                const refetch = await axios.get(
                    "https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads"
                )
                set({
                    threadList: refetch.data,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
    
})