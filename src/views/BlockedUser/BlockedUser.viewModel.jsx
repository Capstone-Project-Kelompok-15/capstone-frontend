import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const BlockUserViewModel = () => {
    const {
        users,
        isExpand,
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal
    } = useStore(state => state)

    
    const formik = useFormik({
        initialValues: {
            mute_duration: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const blockedUsers = users.filter(
        user => user.block_status
    )


    return {
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        formik,
        isExpand,
        blockedUsers
    }

}

export default BlockUserViewModel;