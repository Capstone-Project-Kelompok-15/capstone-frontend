export const SimpanModalSlice = (set) => ({
    isSimpanModalClicked: false,
    setIsSimpanModalClicked: () =>
        set((state) => ({ isSimpanModalClicked: !state.isSimpanModalClicked })),
})
