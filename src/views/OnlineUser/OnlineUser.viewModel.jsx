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
        selectedUserMuteStatus,
        selectedUser,
        unmuteUser,
        searchResults
    } = useStore(state => state)

    const onlineUsers = users.filter(
        user => user.online_status && !user.block_status
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

    const handleUnmuteProceed = () => {
        unmuteUser(selectedUser)
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

    const handleMuteDate = (date) => {
        const currentDate = new Date();
        const targetDate = new Date(date);

        currentDate.setHours(0, 0, 0, 0);
        targetDate.setHours(0, 0, 0, 0);

        const diff = Math.floor((targetDate - currentDate) / (1000 * 60 * 60 * 24));
        const daysDiff = `${diff} Hari`;

        return daysDiff;
    };

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
        searchResults,
        handleMuteDate,
        selectedUserMuteStatus,
        handleUnmuteProceed
    }

}

export default OnlineUserViewModel;