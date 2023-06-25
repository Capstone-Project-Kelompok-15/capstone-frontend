import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const OnlineUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        muteUser,
        handleMuteModal,
        blockUser,
        handleSelectUser,
        selectedUser,
        searchResults
    } = useStore(state => state)

    const onlineUsers = users.filter(
        user => user.online_status && !user.block_status && user.mute_status
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

    const handleMuteOpen = (id) => {
        handleMuteModal()
        handleSelectUser(id)
    }

    const handleMuteCancel = () => {
        handleMuteModal()
        handleSelectUser(null)
    }

    const handleDate = (days) => {
        const currentDate = new Date();
        const futureDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000)

        futureDate.setHours(0, 0, 0, 0);
        
        return futureDate.toISOString();
    };


    const formik = useFormik({
        initialValues: {
            mute_duration: ''
        },
        onSubmit: values => {
            muteUser(selectedUser, handleDate(values.mute_duration))
        }
    })


    return {
        handleBlockOpen,
        handleBlockCancel,
        handleBlockProceed,
        handleMuteOpen,
        handleMuteCancel,
        isBlockModalClicked,
        isMuteModalClicked,
        formik,
        isExpand,
        onlineUsers,
        searchResults
    }

}

export default OnlineUserViewModel;