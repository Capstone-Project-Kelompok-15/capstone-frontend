// import React from "react"
import { useStore } from "../../config/zustand/store"

const ThreadReportModel = () => {
    const { isExpand } = useStore((state) => state)
    return { isExpand }
}

export default ThreadReportModel
