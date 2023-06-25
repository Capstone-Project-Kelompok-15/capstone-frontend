import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const BlockUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        muteUser,
        selectedUser,
        handleSelectUser,
        unblockUser,
        searchResults
    } = useStore(state => state)

    const handleUnblockOpen = (id) => {
        handleBlockModal()
        handleSelectUser(id)
    }

    const handleUnblockCancel = () => {
        handleBlockModal()
        handleSelectUser(null)
    }

    const handleUnblockProceed = () => {
        unblockUser(selectedUser)
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

    const blockedUsers = users.filter(
        user => user.block_status
    )


    return {
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        formik,
        isExpand,
        blockedUsers,
        handleUnblockOpen,
        handleUnblockCancel,
        handleUnblockProceed,
        handleMuteOpen,
        handleMuteCancel,
        searchResults,
    }

}

export default BlockUserViewModel;