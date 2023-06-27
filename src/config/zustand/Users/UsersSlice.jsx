import axios from "axios"

// mockAPI URL
const baseURL = 'https://64939c210da866a953668936.mockapi.io/users/Users'

/* BE TEAM URL 
const BE_URL = 'https://capstone-production-c8c9.up.railway.app/admin'
*/

export const UsersSlice = (set, get) => ({
    users: [],
    searchResults: [],
    selectedUser: null,
    selectedUserMuteStatus: null,
    isBlockModalClicked: false,
    isMuteModalClicked: false,
    lastUpdatedTime: null,
    handleBlockModal: () => set(state => (
        {
            isBlockModalClicked: !state.isBlockModalClicked
        })),
    handleMuteModal: () => set(state => (
        {
            isMuteModalClicked: !state.isMuteModalClicked
        })),
    getUsers: async () => {
        /*
        BE URL config
        const persistedState = JSON.parse(localStorage.getItem('user-token'))
        const { accessToken } = persistedState.state
        const response = await axios.get(BE_URL, {
        headers: {
        Authorization: `Bearer ${accessToken}`
        }
        })
         */

        const currentDate = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

        try {
            const response = await axios.get(baseURL, {
            })

            set({
                users: response.data,
                lastUpdatedTime: formattedTime
            })
        } catch (error) {
            console.log(error);
        }
    },
    handleSelectUser: (id) => {
        set(
            {
                selectedUser: id,
                selectedUserMuteStatus: get().users.find(user => user.id === id).mute_status
            }
        )
    },
    blockUser: async (id) => {
        try {
            const response = await axios.put(
                `${baseURL}/${id}`, {
                block_status: true
            })

            if (response.status === 200) {
                get().getUsers()
                set({
                    isBlockModalClicked: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    muteUser: async (id, duration) => {
        try {
            const response = await axios.put(
                `${baseURL}/${id}`, {
                mute_duration: duration,
                mute_status: true,
            })

            if (response.status === 200) {
                get().getUsers()
                set({
                    isMuteModalClicked: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    unblockUser: async (id) => {
        try {
            const response = await axios.put(
                `${baseURL}/${id}`, {
                block_status: false
            })

            if (response.status === 200) {
                get().getUsers()
                set({
                    isBlockModalClicked: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    unmuteUser: async (id) => {
        try {
            const response = await axios.put(
                `${baseURL}/${id}`, {
                mute_duration: '',
                mute_status: false,
            })

            if (response.status === 200) {
                get().getUsers()
                set({
                    isMuteModalClicked: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    emptySearchResults: () => set(() => ({
        searchResults: []
    })),
    handleTotalUsersSearch: (searchValue) => {
        const filteredResults = get().users.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase()) && !user.block_status
        );

        set({ searchResults: filteredResults });
    },
    handleOnlineUsersSearch: (searchValue) => {
        const filteredResults = get().users.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase()) && user.online_status && !user.block_status
        );

        set({ searchResults: filteredResults });
    },
    handleMutedUsersSearch: (searchValue) => {
        const filteredResults = get().users.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase()) && user.mute_status
        );

        set({ searchResults: filteredResults });
    },
    handleBlockedUsersSearch: (searchValue) => {
        const filteredResults = get().users.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase()) && user.block_status
        );

        set({ searchResults: filteredResults });
    },
})