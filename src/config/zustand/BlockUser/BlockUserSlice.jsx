export const BlockUserSlice = set => ({
    isUserBlocked: false,
    setIsUserBlocked: () => set(state => ({ isUserBlocked: !state.isUserBlocked }))
})