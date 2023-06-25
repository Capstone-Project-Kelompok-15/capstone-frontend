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
        handleThreadSearch,
    } = useStore((state) => state)

    const formik = useFormik({
        initialValues: {
            searchValue: "",
        },
        onSubmit: (values) => {
            handleThreadSearch(values.searchValue)
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
    }
}

export default ThreadLayoutModel


