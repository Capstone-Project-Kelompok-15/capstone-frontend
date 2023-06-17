export const ChartSlice = (set) => ({
    chartExpand: false,
    setChartExpand: () => set((state) => ({ chartExpand: !state.chartExpand })),
})
