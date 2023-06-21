import { useStore } from "../../config/zustand/store";

const ManageThreadViewModel = () => {
    const {
        isExpand,
    } = useStore(state => state)

    return {
        isExpand,
    }
} 

export default ManageThreadViewModel;