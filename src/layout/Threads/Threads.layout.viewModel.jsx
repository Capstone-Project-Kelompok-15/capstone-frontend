import { useFormik } from "formik"
import { useStore } from "../../config/zustand/store"

const ThreadLayoutModel = () => {
    const {
        setSearchHistory,
        isExpand,
        searchHistory,
        isSearch,
        handleSearch,
        deleteSearchHistory,
        emptySearchResults,
        handleThreadsSearch,
        setLocation,
        currentPageLocation,
        lastUpdatedTime,
        handleFocus,
        handleBlur,
        isFocused,
    } = useStore((state) => state)

    const formik = useFormik({
        initialValues: {
            searchValue: "",
        },
        onSubmit: (values) => {
            if (currentPageLocation === "/thread/manage") {
                handleThreadsSearch(values.searchValue)
            }

            if (currentPageLocation === "/thread/report") {
                handleThreadsSearch(values.searchValue)
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
        handleSearch,
        isSearch,
        formik,
        isExpand,
        handleKeyPress,
        searchHistory,
        handleDelete,
        handleClickSearchHistory,
        emptySearchResults,
        setLocation,
        lastUpdatedTime,
        handleOnFocus,
        handleOnBlur,
        isFocused,
    }
}

export default ThreadLayoutModel
