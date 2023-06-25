import { useEffect } from "react"
import { useStore } from "../../config/zustand/store"

const ThreadReportModel = () => {
    const {
        isExpand,
        getReport,
        report,
        handleSelectThread,
        handleAcceptThread,
        handleDenyThread,
        isAcceptThreadModal,
        isDenyThreadModal,
        acceptReport,
        denyReport,
        selectedThread,
        threadResults,
    } = useStore(
        (state) => state
    )
    useEffect(() => {
        getReport()
    }, [])

    const handleAcceptClick = (id) => {
        handleSelectThread(id)
        handleAcceptThread()
    }

    const handleAcceptProceed = () => {
        acceptReport(selectedThread)
    }

    const handleAcceptCancel = () => {
        handleAcceptThread()
    }

    const handleDenyClick = (id) => {
        handleSelectThread(id)
        handleDenyThread()
    }

    const handleDenyProceed = () => {
        denyReport(selectedThread)
    }

    const handleDenyCancel = () => {
        handleDenyThread()
    }

    const filteredReport = report.filter(
        (thread) =>
            thread.pending_status
    )

    return {
        isExpand,
        filteredReport,
        handleAcceptClick,
        handleDenyClick,
        handleAcceptCancel,
        handleDenyCancel,
        handleDenyProceed,
        isAcceptThreadModal,
        isDenyThreadModal,
        handleAcceptProceed,
        threadResults,
    }
}

export default ThreadReportModel
