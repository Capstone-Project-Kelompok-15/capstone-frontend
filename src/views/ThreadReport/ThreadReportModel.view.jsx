import { useState, useEffect } from "react"
import { useStore } from "../../config/zustand/store"
import ThreadReport from "./ThreadReport.view"

const ThreadReportModel = () => {
    const { isExpand, getReport, report, updateReport } = useStore(
        (state) => state
    )

    const [showModal, setShowModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState("")
    const [updatedData, setupdatedData] = useState(null)

    useEffect(() => {
        getReport()
    }, [])

    const handleAcceptClick = (thread) => {
        const updatedThread = {
            ...thread,
            accept_status: true,
            deny_status: false,
        }
        setShowModal(true)
        setupdatedData(updatedThread)
        setModalTitle("Setujui Laporan?")
        setModalContent("Apakah Kamu Yakin Akan Menyetujui Laporan Ini?")
    }

    const handleDenyClick = (thread) => {
        const updatedThread = {
            ...thread,
            accept_status: false,
            deny_status: true,
        }
        setShowModal(true)
        setupdatedData(updatedThread)
        setModalTitle("Tolak Laporan?")
        setModalContent("Apakah Kamu Yakin Akan Menolak Laporan Ini?")
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    const handleUpdate = () => {
        if (updatedData) {
            const newData = { ...updatedData }
            updateReport(newData.id, newData)
            setShowModal(false)
        }
    }

    const filteredReport = report.filter(
        (thread) =>
            !thread.accept_status &&
            !thread.deny_status &&
            (!updatedData || thread.id !== updatedData.id)
    )
    return {
        isExpand,
        handleAcceptClick,
        handleDenyClick,
        showModal,
        modalTitle,
        modalContent,
        handleModalClose,
        handleUpdate,
        filteredReport,
    }
}

export default ThreadReportModel
