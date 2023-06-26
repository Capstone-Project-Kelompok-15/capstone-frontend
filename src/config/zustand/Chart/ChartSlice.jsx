import axios from "axios"

export const ChartSlice = (set) => ({
    chartExpand: false,
    setChartExpand: () => set((state) => ({ chartExpand: !state.chartExpand })),
    chartThreads: [],
    fetchChartThreads: async () => {
        try {
            const res = await axios.get(
                "https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads")
            set({ chartThreads: res.data })
        } catch (error) {
            console.log(error)
        }
    },
})
