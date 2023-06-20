import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const OnlineUserViewModel = () => {
    const {
        userList,
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

    // const onlineUsers = users.filter(
    //     user => user.online_status && !user.block_status && !user.mute_status   
    // )


    return {
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        formik,
        isExpand,
        // onlineUsers
    }

}

export default OnlineUserViewModel;