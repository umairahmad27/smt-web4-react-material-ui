import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Messages from "./Messages"

export default function Index() {
    return (
        <Routes >
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path="messages" element={<Messages />} />
            </Route>
        </Routes>
    )
}
