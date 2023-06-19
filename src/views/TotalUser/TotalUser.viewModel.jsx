import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const TotalUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal
    } = useStore(state => state)


    const totalUsers = users.filter(
        user => !user.block_status && !user.mute_status
    )

    const formik = useFormik({
        initialValues: {
            mute_duration: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const handleMute = () => {
        alert("User Muted")
    }

    const handleBlock = () => {
        alert("User Blocked")
    }

    return {
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        formik,
        isExpand,
        totalUsers,
        handleMute,
        handleBlock
    }

}

export default TotalUserViewModel;  