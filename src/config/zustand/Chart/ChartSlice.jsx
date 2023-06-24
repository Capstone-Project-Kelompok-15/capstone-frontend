import axios from "axios"
export const ChartSlice = (set) => ({
    chartExpand: false,
    setChartExpand: () => set((state) => ({ chartExpand: !state.chartExpand })),
    Threads: [],
    fetchThreads: async () => {
        try {
            const res = await axios.get(
                "https://64280eb4161067a83b060b8b.mockapi.io/thread"
            )
            set({ Threads: res.data })
        } catch (error) {
            console.log(error)
        }
    },
})
