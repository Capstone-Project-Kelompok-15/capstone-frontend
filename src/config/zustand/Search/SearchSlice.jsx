// import { persist } from "zustand/middleware";

export const SearchSlice = (set) => ({
    isSearch: false,
    searchHistory: [],
    searchResults: [],
    location: '',
    setLocation: (url) => {
        set({ location: url })
    },
    emptySearchResults: () => set(() => ({
        searchResults: []
    })),
    setSearchResults: results => set((state) => ({
        searchResults: [
            results, ...state.searchResults
        ]
    })),
    handleSearch: () => set(state => (
        {
            isSearch: !state.isSearch
        }
    )),
    setSearchHistory: (history) => set(state => {
        const limitHistory = [history, ...state.searchHistory].slice(0, 3);
        return {
            searchHistory: limitHistory
        };
    }),
    deleteSearchHistory: () => set(() => (
        {
            searchHistory: []
        }
    )),
})