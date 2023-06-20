import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const TotalUserViewModel = () => {
    const blockModalState = useStore(state =>
        state.isBlockModalClicked)
    const handleBlock = useStore(state => state.setIsBlockModalClicked)

    const muteModalState = useStore(state => state.isMuteModalClicked)
    const handleMute = useStore(state => state.setIsMuteModalClicked)

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
        blockModalState,
        handleBlock,
        muteModalState,
        handleMute,
        formik,
        fetchUsers,
        accessToken

    }

}

export default TotalUserViewModel;