export const SearchSlice = (set) => ({
    isSearch: false,
    isFocused: false,
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
            if (history) {
                const limitHistory = [history, ...state.searchHistory].slice(0, 3)
                return {
                    searchHistory: limitHistory,
                }
            }
            return state
        }),
    deleteSearchHistory: () =>
        set(() => ({
            searchHistory: [],
        })),
    handleFocus: () => set(() => ({ isFocused: true })),
    handleBlur: () => set(() => ({ isFocused: false })),
})
// {
//     name: "searchHistory",
//     partialize: state => ({ searchHistory: state.searchHistory })
// })
