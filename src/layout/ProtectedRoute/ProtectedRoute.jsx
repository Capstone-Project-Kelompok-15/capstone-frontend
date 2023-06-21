import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useStore } from '../../config/zustand/store'

function ProtectedRoute({ children }) {
    const isLogin = useStore((state) => state.isLogin)
    const navigate = useNavigate()


    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }

    }, [isLogin])
    return children
}

export default ProtectedRoute