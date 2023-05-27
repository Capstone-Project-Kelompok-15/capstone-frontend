import { useStore } from "../../config/zustand/store";

const OnlineUserViewModel = () => {
    const blockModalState = useStore(state =>
        state.isBlockModalClicked)
    const handleBlock = useStore(state => state.setIsBlockModalClicked)


    const muteModalState = useStore(state => state.isMuteModalClicked)
    const handleMute = useStore(state => state.setIsMuteModalClicked)

    return {
        blockModalState,
        handleBlock,
        muteModalState,
        handleMute
    }

}

export default OnlineUserViewModel;