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
        currentPageLocation
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
        setLocation
    }
}

export default ThreadLayoutModel
