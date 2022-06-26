import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RoutesFrontend from "./RoutesFrontend"

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<RoutesFrontend />} />
            </Routes>
        </BrowserRouter>
    )
}
