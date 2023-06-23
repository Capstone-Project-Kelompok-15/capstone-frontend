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
    } = useStore((state) => state)

    const formik = useFormik({
        initialValues: {
            searchValue: "",
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

    return {
        handleSearch,
        isSearch,
        formik,
        isExpand,
        handleKeyPress,
        searchHistory,
        handleDelete,
    }
}

export default ThreadLayoutModel
