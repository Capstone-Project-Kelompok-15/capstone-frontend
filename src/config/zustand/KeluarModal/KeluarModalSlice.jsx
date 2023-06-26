export const KeluarModalSlice = (set) => ({
    isKeluarModalClicked: false,
    setIsKeluarModalClicked: () =>
        set((state) => ({ isKeluarModalClicked: !state.isKeluarModalClicked })),
})
