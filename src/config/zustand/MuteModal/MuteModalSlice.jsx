export const MuteModalSlice = set => ({
    isMuteModalClicked: false,
    setIsMuteModalClicked: () => set(state => ({ isMuteModalClicked: !state.isMuteModalClicked }))
})