import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useStore } from '../../config/zustand/store'

function ProtectedRoute({ children }) {
    const isAuthenticated = useStore(state => state.isAuthenticated)
    const navigate = useNavigate()


    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/landing')
        }

    }, [isAuthenticated])
    return children
}

export default ProtectedRoute