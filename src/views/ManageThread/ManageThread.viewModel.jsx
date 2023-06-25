import { useStore } from "../../config/zustand/store";

const ManageThreadViewModel = () => {
    const {
        isExpand,
        getReport,
        deletethread,
    } = useStore(state => state)

    return {
        isExpand,
        getReport,
        deletethread,
    }
} 

export default ManageThreadViewModel;