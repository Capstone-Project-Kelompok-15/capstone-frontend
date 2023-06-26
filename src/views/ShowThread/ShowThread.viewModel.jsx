import { useEffect } from "react"
import { useStore } from "../../config/zustand/store"

const ShowThreadViewModel = () => {
    const { isExpand, accessToken, fetchThread, threadList } = useStore(
        (state) => state
    )

    useEffect(() => {
        fetchThread(accessToken)
    }, [])

    return {
        isExpand,
        threadList,
    }
}

export default ShowThreadViewModel
