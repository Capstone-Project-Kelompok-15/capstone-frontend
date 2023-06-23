import { useEffect } from "react"
import { useStore } from "../../config/zustand/store"

const ManageThreadViewModel = () => {
    const {
        isExpand,

        threadList,
        accessToken,
        fetchThreads,
    } = useStore((state) => state)

    useEffect(() => {
        fetchThreads(accessToken)
    }, [])

    return {
        isExpand,
        threadList,
    }
}

export default ManageThreadViewModel
