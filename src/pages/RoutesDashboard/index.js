import React from 'react'
// import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
// import Footer from "./components/Footer"
// import Home from './Home'
// import Messages from './Messages'

export default function index() {
    return (
        <>
            <Header />

            {/* <main>
                <Routes >
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path="messages" element={<Messages />} />
                    </Route>
                </Routes>
            </main> */}
        </>
    )
}
