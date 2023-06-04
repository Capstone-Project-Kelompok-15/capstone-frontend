import { useStore } from "../../config/zustand/store";
import users from "../../dummyData/userList";

const OnlineUserViewModel = () => {
    const blockModalState = useStore(state =>
        state.isBlockModalClicked)
    const handleBlock = useStore(state => state.setIsBlockModalClicked)


    const muteModalState = useStore(state => state.isMuteModalClicked)
    const handleMute = useStore(state => state.setIsMuteModalClicked)
    
    const onlineUsers = users.filter(user => user.online_status && !user.block_status && !user.mute_status)

    return {
        blockModalState,
        handleBlock,
        muteModalState,
        handleMute,
        onlineUsers
    }

}

export default OnlineUserViewModel;