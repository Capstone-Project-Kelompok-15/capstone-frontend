import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const TotalUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        muteUser,
        handleMuteModal,
        blockUser,
        getUsers,
        handleSelectUser,
        selectedUser
    } = useStore(state => state)


    const totalUsers = users.filter(
        user => !user.block_status && !user.mute_status
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
        const currentDate = new Date()
        const futureDate = new Date(currentDate.setDate(currentDate.getDate() + days)).toISOString()
        return futureDate
    }

    const formik = useFormik({
        initialValues: {
            mute_duration: ''
        },
        onSubmit: values => {
            muteUser(selectedUser, handleDate(values.mute_duration))
        }
    })

    return {
        selectedUser,
        handleBlockOpen,
        handleBlockCancel,
        handleBlockProceed,
        handleMuteCancel,
        handleMuteOpen,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        formik,
        isExpand,
        totalUsers,
        blockUser,
        getUsers,
        users
    }

}

export default TotalUserViewModel;  