export const createClickSlice = set => ({
    isClick: false,
    onClick: () => set(state => ({ isClick: !state.isClick }))
})