import axios from "axios"

export const UsersSlice = set => ({
    users: [],
    selectedUser: null,
    isBlockModalClicked: false,
    isMuteModalClicked: false,
    handleBlockModal: () => set(state => (
        {
            isBlockModalClicked: !state.isBlockModalClicked
        })),
    handleMuteModal: () => set(state => (
        {
            isMuteModalClicked: !state.isMuteModalClicked
        })),
    getUsers: async () => {
        try {
            const response = await axios.get('https://64939c210da866a953668936.mockapi.io/users/Users')
            set({ users: response.data })
        } catch (error) {
            console.log(error);
        }
    },
    handleSelectUser: (id) => {
        set({ selectedUser: id })
    },
    blockUser: async (id) => {
        try {
            const response = await axios.put(`https://64939c210da866a953668936.mockapi.io/users/Users/${id}`, {
                block_status: true
            })

            if (response.status === 200) {
                const refetch = await axios.get('https://64939c210da866a953668936.mockapi.io/users/Users')
                set({
                    users: refetch.data,
                    isBlockModalClicked: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    muteUser: async (id, duration) => {
        try {
            const response = await axios.put(`https://64939c210da866a953668936.mockapi.io/users/Users/${id}`, {
                mute_duration: duration,
                mute_status: true,
            })

            if (response.status === 200) {
                const refetch = await axios.get('https://64939c210da866a953668936.mockapi.io/users/Users')
                set({
                    users: refetch.data,
                    isMuteModalClicked: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
})