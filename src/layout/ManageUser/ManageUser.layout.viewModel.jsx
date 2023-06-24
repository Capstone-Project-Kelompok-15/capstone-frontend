import { useFormik } from "formik"
import { useStore } from "../../config/zustand/store"

const ManageUserViewModel = () => {
    const {
        users,
        setSearchHistory,
        isExpand,
        searchHistory,
        isSearch,
        handleSearch,
        deleteSearchHistory,
    } = useStore((state) => state)

    const formik = useFormik({
        initialValues: {
            searchValue: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
        onSubmit: (values) => {
            setSearchHistory(values.searchValue)
        },
    })

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            formik.handleSubmit()
        }
    }

    const handleDelete = () => {
        deleteSearchHistory()
    }

    const blockedUsers = users.filter((user) => user.block_status).length

    const mutedUsers = users.filter(
        (user) => user.mute_status && !user.block_status && !user.online_status
    ).length

    const onlineUsers = users.filter(
        (user) => user.online_status && !user.block_status && !user.mute_status
    ).length

    const totalUsers = users.filter(
        (user) => !user.block_status && !user.mute_status
    ).length

    return {
        handleSearch,
        isSearch,
        formik,
        isExpand,
        handleKeyPress,
        blockedUsers,
        mutedUsers,
        onlineUsers,
        totalUsers,
        searchHistory,
        handleDelete,
    }
}

export default ManageUserViewModel
