export const SearchSlice = set => ({
    isSearch: false,
    setIsSearch: () => set(state => ({ isSearch: !state.isSearch }))
})