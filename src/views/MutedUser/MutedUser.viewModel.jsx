import { useStore } from "../../config/zustand/store";

const MutedUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        unmuteUser,
        blockUser,
        handleSelectUser,
        selectedUser,
        searchResults
    } = useStore(state => state)

    const mutedUsers = users.filter(
        user => user.mute_status
    )

    const handleBlockOpen = (id) => {
        handleBlockModal()
        handleSelectUser(id)
    }

    const handleBlockCancel = () => {
        handleBlockModal()
        handleSelectUser(null)
    }

    const handleBlockProceed = () => {
        blockUser(selectedUser)
    }

    const handleUnmuteOpen = (id) => {
        handleMuteModal()
        handleSelectUser(id)
    }

    const handleUnmuteCancel = () => {
        handleMuteModal()
        handleSelectUser(null)
    }

    const handleUnmuteProceed = () => {
        unmuteUser(selectedUser)
    }

    const handleMuteDate = (date) => {
        const currentDate = new Date()
        const targetDate = new Date(date)
    
        const Diff = Math.floor((targetDate - currentDate) / (1000 * 60 * 60 * 24))
        
        const daysDiff = `${Diff} Hari`

        return daysDiff
    }
    
    return {
        handleBlockOpen,
        handleBlockCancel,
        handleBlockProceed,
        handleUnmuteOpen,
        handleUnmuteCancel,
        handleUnmuteProceed,
        handleMuteDate,
        isBlockModalClicked,
        isMuteModalClicked,
        isExpand,
        mutedUsers,
        searchResults
    }

}

export default MutedUserViewModel;