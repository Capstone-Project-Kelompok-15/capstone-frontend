import { useStore } from "../../config/zustand/store";

const ThreadLayoutModel = () => {
    const {
        isExpand,
    } = useStore(state => state)

    return {
        isExpand,
    }
} 

export default ThreadLayoutModel;

