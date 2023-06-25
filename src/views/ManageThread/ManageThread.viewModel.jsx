import { useStore } from "../../config/zustand/store";

const ManageThreadViewModel = () => {
    const {
        isExpand,
        getthread,
        deletethread,
    } = useStore(state => state)

    return {
        isExpand,
        getthread,
        deletethread,
    }
} 

export default ManageThreadViewModel;