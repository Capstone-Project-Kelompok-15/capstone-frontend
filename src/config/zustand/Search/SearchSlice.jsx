export const SearchSlice = (set) => ({
    isSearch: false,
    currentPageLocation: "",
    searchHistory: [],
    setLocation: (url) => {
        set({ currentPageLocation: url })
    },
    handleSearch: () =>
        set((state) => ({
            isSearch: !state.isSearch,
        })),
    setSearchHistory: (history) =>
        set((state) => {
            const limitHistory = [history, ...state.searchHistory].slice(0, 3)
            return {
                searchHistory: limitHistory,
            }
        }),
    deleteSearchHistory: () =>
        set(() => ({
            searchHistory: [],
        })),
})
// {
//     name: "searchHistory",
//     partialize: state => ({ searchHistory: state.searchHistory })
// })
