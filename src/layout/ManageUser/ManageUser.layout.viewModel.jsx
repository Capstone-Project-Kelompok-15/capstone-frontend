import { useFormik } from "formik"
import { useStore } from "../../config/zustand/store"

const ManageUserViewModel = () => {
    const {
        users,
        setSearchHistory,
        isExpand,
        searchHistory,
        deleteSearchHistory,
        getUsers,
        setLocation,
        currentPageLocation,
        emptySearchResults,
        handleTotalUsersSearch,
        handleOnlineUsersSearch,
        handleMutedUsersSearch,
        handleBlockedUsersSearch,
        handleFocus,
        handleBlur,
        isFocused,
        lastUpdatedTime,
    } = useStore((state) => state)

    const blockedUsers = users.filter((user) => user.block_status).length

    const mutedUsers = users.filter((user) => user.mute_status).length

    const onlineUsers = users.filter(
        (user) => user.online_status && !user.block_status
    ).length

    const totalUsers = users.filter((user) => !user.block_status).length

    const formik = useFormik({
        initialValues: {
            searchValue: "",
        },
        onSubmit: (values) => {
            if (currentPageLocation === "/manageuser/total") {
                handleTotalUsersSearch(values.searchValue)
            }
            if (currentPageLocation === "/manageuser/online") {
                handleOnlineUsersSearch(values.searchValue)
            }
            if (currentPageLocation === "/manageuser/muted") {
                handleMutedUsersSearch(values.searchValue)
            }
            if (currentPageLocation === "/manageuser/blocked") {
                handleBlockedUsersSearch(values.searchValue)
            }

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

    const handleClickSearchHistory = (searchValue) => {
        formik.setFieldValue("searchValue", searchValue)
    }

    const handleOnFocus = () => {
        handleFocus()
    }

    const handleOnBlur = () => {
        handleBlur()
    }


    return {
        getUsers,
        formik,
        isExpand,
        isFocused,
        handleKeyPress,
        blockedUsers,
        mutedUsers,
        onlineUsers,
        totalUsers,
        searchHistory,
        handleDelete,
        setLocation,
        emptySearchResults,
        handleClickSearchHistory,
        currentPageLocation,
        handleOnFocus,
        handleOnBlur,
        lastUpdatedTime,
    }
}

export default ManageUserViewModel
