import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RoutesFrontend from "./RoutesFrontend"
import RoutesDashboard from "./RoutesDashboard"

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<RoutesFrontend />} />
                <Route path="/dashboard/*" element={<RoutesDashboard />} />
            </Routes>
        </BrowserRouter>
    )
}
