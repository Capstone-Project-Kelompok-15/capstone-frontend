import { useNavigate } from "react-router-dom"
import { useStore } from "../../config/zustand/store"

function KeluarButtonModel() {
    const keluarModalState = useStore((state) => state.isKeluarModalClicked)
    const handleKeluar = useStore((state) => state.setIsKeluarModalClicked)
    const keluarProceed = useNavigate()

    return {
        keluarModalState,
        handleKeluar,
        keluarProceed,
    }
}

export default KeluarButtonModel
