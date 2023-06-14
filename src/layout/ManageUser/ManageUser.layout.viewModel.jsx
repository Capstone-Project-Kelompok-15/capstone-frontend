import { useFormik } from "formik";
import { useStore } from "../../config/zustand/store";

const ManageUserViewModel = () => {
    const handleSearch = useStore(state => state.setIsSearch)
    const searchState = useStore(state => state.isSearch)

    const formik = useFormik({
        initialValues: {
            searchValue: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            formik.handleSubmit()
        }

    }

    return {
        handleSearch,
        searchState,
        formik,
        handleKeyPress
    }
}

export default ManageUserViewModel;