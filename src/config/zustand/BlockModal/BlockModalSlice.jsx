export const BlockModalSlice = set => ({
    isBlockModalClicked : false,
    handleBlockModal : () => set(state => ({isBlockModalClicked : !state.isBlockModalClicked}))
})