export const SidebarSlice = set => ({
    isExpand: false,
    setIsExpand: () => set(state => ({ isExpand: !state.isExpand }))
})