import { useStore } from "../../config/zustand/store";

const ManageThreadViewModel = () => {
    const {
        isExpand,
        getReport,
        deletethread,
        threadResults,
    } = useStore(state => state)

    return {
        isExpand,
        getReport,
        deletethread,
        threadResults,
    }
} 

export default ManageThreadViewModel;