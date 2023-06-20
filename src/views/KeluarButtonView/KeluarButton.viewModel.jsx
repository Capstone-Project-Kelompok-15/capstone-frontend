import { useStore } from "../../config/zustand/store"

function KeluarButtonModel() {
    const keluarModalState = useStore((state) => state.isKeluarModalClicked)
    const handleKeluar = useStore((state) => state.setIsKeluarModalClicked)
    return keluarModalState, handleKeluar
}

export default KeluarButtonModel
