import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const ManageUserViewModel = () => {
    const {
        users,
        setSearchHistory,
        isExpand,
        searchHistory,
        isSearch,
        handleSearch,
        deleteSearchHistory,
        getUsers,
        setSearchResults,
        setLocation,
        location,
        emptySearchResults,
    } = useStore(state => state)

    const blockedUsers = users.filter(
        user => user.block_status
    ).length

    const mutedUsers = users.filter(
        user => user.mute_status && !user.block_status
    ).length

    const onlineUsers = users.filter(
        user => user.online_status && !user.block_status && user.mute_status
    ).length

    const totalUsers = users.filter(
        user =>
            !user.block_status
    ).length

    const handleUsersSearch = (searchValue) => {
        if (location === "/manageUser/total") {
            const filteredTotalUsers = users.filter(user =>
                user.name.toLowerCase() === searchValue.toLowerCase() && !user.block_status
            );
            setSearchResults(filteredTotalUsers);
        }

        if (location === "/manageUser/online") {
            const filteredOnlineUsers = users.filter(user =>
                user.name.toLowerCase() === searchValue.toLowerCase() && user.online_status && !user.block_status && user.mute_status
            );
            setSearchResults(filteredOnlineUsers);
        }

        if (location === "/manageUser/muted") {
            const filteredMutedUsers = users.filter(user =>
                user.name.toLowerCase() === searchValue.toLowerCase() && user.mute_status && !user.block_status
            );
            setSearchResults(filteredMutedUsers);
        }

        if (location === "/manageUser/blocked") {
            const filteredBlockedUsers = users.filter(user =>
                user.name.toLowerCase() === searchValue.toLowerCase() && user.block_status
            );
            setSearchResults(filteredBlockedUsers);
        }
    };

    const formik = useFormik({
        initialValues: {
            searchValue: ''
        },
        onSubmit: values => {
            handleUsersSearch(values.searchValue)
            setSearchHistory(values.searchValue)
        }
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

    return {
        handleSearch,
        getUsers,
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
        setLocation,
        emptySearchResults,
    }
}


export default ManageUserViewModel;