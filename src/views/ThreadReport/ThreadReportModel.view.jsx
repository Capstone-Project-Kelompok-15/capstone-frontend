import { useStore } from "../../config/zustand/store"

const ThreadReportModel = () => {
    const { isExpand, getReport } = useStore((state) => state)
    return { isExpand, getReport }
}

export default ThreadReportModel
