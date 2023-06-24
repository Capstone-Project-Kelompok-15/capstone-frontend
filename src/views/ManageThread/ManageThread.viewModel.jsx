import { useEffect } from "react";
import { useStore } from "../../config/zustand/store";

const ManageThreadViewModel = () => {
    const {
        isExpand,
        threadList, 
        accessToken, 
        fetchThreads,
        deletethread,
    } = useStore(state => state)

    useEffect(() => {
        fetchThreads(accessToken)
    }, [])

    return {
        isExpand,
        threadList,
        deletethread,
    }
} 

export default ManageThreadViewModel;