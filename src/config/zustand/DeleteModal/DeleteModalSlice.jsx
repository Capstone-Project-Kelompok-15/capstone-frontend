export const DeleteModalSlice = set => ({
    isDeleteModalClicked : false,
    setIsDeleteModalClicked : () => set(state => ({isDeleteModalClicked : !state.isDeleteModalClicked}))
})