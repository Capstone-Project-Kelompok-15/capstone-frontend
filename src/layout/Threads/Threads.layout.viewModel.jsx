import { useEffect } from "react";
import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const ThreadLayoutModel = () => {
    const {
        setSearchHistory,
        isExpand,
        searchHistory,
        isSearch,
        handleSearch,
        deleteSearchHistory,
        fetchThread,
        accessToken,
        threadList,
    } = useStore(state => state)


    const formik = useFormik({
        initialValues: {
            searchValue: ''
        },
        onSubmit: values => {
            setSearchHistory(values.searchValue)
        }
    })

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            formik.handleSubmit()
        }

    }

    useEffect(() => {
        fetchThread(accessToken)
    }, [])

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
        threadList
    }
}

export default ThreadLayoutModel;

