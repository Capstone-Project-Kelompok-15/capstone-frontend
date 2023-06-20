export const SearchHistorySlice = set => ({
    searchHistory: [],
    setSearchHistory: history => set(state => ({
        searchHistory: [
            history, ...state.searchHistory
        ]
    })),
    deleteSearchHistory: () => set(() => ({
        searchHistory: []
    }))
})