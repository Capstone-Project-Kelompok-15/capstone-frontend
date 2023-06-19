import { useStore } from "../../config/zustand/store";

const MutedUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal
    } = useStore(state => state)

    const mutedUsers = users.filter(
        user => user.mute_status && !user.block_status && !user.online_status
    )

    return {
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        isExpand,
        mutedUsers,
    }

}

export default MutedUserViewModel;