import { useEffect, useState } from "react"
import { useStore } from "../../config/zustand/store"

const ManageThreadViewModel = () => {
    const {
        isExpand,
        getReport,
        report,
        deletethread,
        threadResults,
        isDeleteThread,
        handleDeleteThread,
        handleSelectThread,
        selectedThread,
    } = useStore((state) => state)

    useEffect(() => {
        getReport()
    }, [])

    const handleAcceptClick = (id) => {
        handleSelectThread(id)
        handleDeleteThread()
    }

    const handleDelete = () => {
        deletethread(selectedThread)
    }
    const handleDeleteCancel = () => {
        handleDeleteThread()
    }
    return {
        isExpand,
        getReport,
        report,
        deletethread,
        threadResults,

        handleAcceptClick,
        handleDelete,

        isDeleteThread,
        handleDeleteThread,
        handleDeleteCancel,
    }
}

export default ManageThreadViewModel
