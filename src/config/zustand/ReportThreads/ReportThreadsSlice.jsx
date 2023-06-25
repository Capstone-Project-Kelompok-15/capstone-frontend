import axios from "axios"

export const ReportThreadsSlice = (set, get) => ({
    report: [],
    threadResults: [],
    isDeleteThread: false,
    isAcceptThreadModal: false,
    isDenyThreadModal: false,
    selectedThread: null,
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

    acceptReport: async (id) => {
        try {
            const response = await axios.put(
                `https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads/${id}`,
                {
                    accept_status: true,
                    pending_status: false,
                }
            )
            if (response.status === 200) {
                get().getReport()
                set({
                    isAcceptThreadModal: false,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },

    denyReport: async (id) => {
        try {
            const response = await axios.put(
                `https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads/${id}`,
                {
                    deny_status: true,
                    pending_status: false,
                }
            )
            if (response.status === 200) {
                get().getReport()
                set({
                    isDenyThreadModal: false,
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
    deletethread: async (id) => {
        try {
            const response = await axios.delete(
                `https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads/${id}`
            )
            if (response.status === 200) {
                get().getReport()
                set({
                    isDeleteThread: false,
                })
                console.log("deleted")
            }
        } catch (error) {
            console.log(error)
        }
    },

    emptySearchResults: () =>
        set(() => ({
            searchResults: [],
        })),

    handleThreadsSearch: (searchValue) => {
        const filteredResults = get().report.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )

        set({ threadResults: filteredResults })
    },
    handleThreadReportSearch: (searchValue) => {
        const filteredResults = get().report.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) && !item.accept_status &&
            !item.deny_status
        )
        set({ threadResults: filteredResults })
    },
    handleDeleteThread: () =>
        set((state) => ({
            isDeleteThread: !state.isDeleteThread,
        })),
    handleSelectThread: (id) => {
        set({
            selectedThread: id,
        })
    },
    handleAcceptThread: () =>
        set((state) => ({ isAcceptThreadModal: !state.isAcceptThreadModal })),
    handleDenyThread: () =>
        set((state) => ({ isDenyThreadModal: !state.isDenyThreadModal })),
})
