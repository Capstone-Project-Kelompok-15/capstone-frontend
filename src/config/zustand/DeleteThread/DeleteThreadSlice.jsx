export const DeleteThreadSlice = set => ({
    isThreadDeleted: false,
    setIsThreadDeleted: () => set(state => ({ isThreadDeleted: !state.IsThreadDeleted }))
})