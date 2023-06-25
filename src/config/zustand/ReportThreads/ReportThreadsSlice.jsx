import axios from "axios"

export const ReportThreadsSlice = (set, get) => ({
    report: [],
    threadResults: [],

    getReport: async () => {
        try {
            const response = await axios.get(
                "https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads"
            )
            set({ report: response.data })
        } catch (error) {
            console.log(error)
        }
    },

    updateReport: async (id, status) => {
        try {
            const response = await axios.put(
                `https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads/${id}`,
                status
            )
            if (response.status === 200) {
                const refetch = await axios.get(
                    "https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads"
                )
                set({
                    report: refetch.data,
                })
            }
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
                    report: refetch.data,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },

    emptySearchResults: () => set(() => ({
        searchResults: []
    })),
    
    handleThreadsSearch: (searchValue) => {
        const filteredResults = get().report.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        set({ threadResults: filteredResults });
    }
})
