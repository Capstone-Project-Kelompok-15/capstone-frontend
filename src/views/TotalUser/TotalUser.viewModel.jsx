import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const TotalUserViewModel = () => {
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

    const { fetchUsers, accessToken } = useStore(state => state)

    return {
        handleBlockModal,
        isBlockModalClicked,
        isMuteModalClicked,
        handleMuteModal,
        formik,
        isExpand,
        fetchUsers,
        accessToken,
        userList

    }

}

export default TotalUserViewModel;  