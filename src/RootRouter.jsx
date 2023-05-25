import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ManageUser } from './views'

function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='manageUser' element={<ManageUser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter