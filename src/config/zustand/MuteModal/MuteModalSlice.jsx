export const MuteModalSlice = set => ({
    isMuteModalClicked: false,
    handleMuteModal: () => set(state => ({ isMuteModalClicked: !state.isMuteModalClicked }))
})