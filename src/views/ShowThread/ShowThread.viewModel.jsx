import { useStore } from "../../config/zustand/store";

const ShowThreadViewModel = () => {
    const {
        isExpand,
    } = useStore(state => state)

    return {
        isExpand,
    }
} 

export default ShowThreadViewModel;