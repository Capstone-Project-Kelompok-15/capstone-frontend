export const MuteUserSlice = set => ({
    isUserMuted: false,
    setIsUserMuted: () => set(state => ({ isUserMuted: !state.isUserMuted }))
})