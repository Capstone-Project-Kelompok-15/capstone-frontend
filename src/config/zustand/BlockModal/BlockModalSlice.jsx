export const BlockModalSlice = set => ({
    isBlockModalClicked : false,
    setIsBlockModalClicked : () => set(state => ({isBlockModalClicked : !state.isBlockModalClicked}))
})