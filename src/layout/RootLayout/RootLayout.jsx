import React from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useStore } from "../../config/zustand/store"
import { Modal, Navbar, Sidebar } from "../../components/organisms"

function RootLayout() {
    const isExpand = useStore((state) => state.isExpand)
    const handleExpand = useStore((state) => state.setIsExpand)
    const location = useLocation()

    const excludedPaths = ["/login", "/landing", "/ubahprofil"]
    const isExcluded = excludedPaths.includes(location.pathname)

    const { isKeluarModalClicked, setIsKeluarModalClicked, logout } = useStore(
        (state) => state
    )
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        setIsKeluarModalClicked()
        navigate("/landing")
    }

    return (
        <div>
            {!isExcluded && (
                <>
                    <Navbar
                        bgNavbar="bgIsLoggedIn"
                        onClick={() => {
                            setIsKeluarModalClicked()
                        }}
                    />
                    {isKeluarModalClicked && (
                        <Modal
                            Message="Keluar?"
                            confirmationMessage="Apakah Kamu Yakin Akan Keluar?"
                            proceedMessage="Keluar"
                            cancelMessage="Batal"
                            handleCancel={() => setIsKeluarModalClicked()}
                            handleProceed={() => handleLogout()}
                            idProceedButton="keluar"
                            idCancelButton="batal"
                        />
                    )}

                    <Sidebar expand={isExpand} handleExpand={handleExpand} />
                </>
            )}
            <Outlet />
        </div>
    )
}

export default RootLayout
