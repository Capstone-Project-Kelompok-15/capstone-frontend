export const SearchSlice = set => ({
    isSearch: false,
    handleSearch: () => set(state => ({ isSearch: !state.isSearch }))
})