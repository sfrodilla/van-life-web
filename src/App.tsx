import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"


function Vans() {
    return <h1>Vans Page</h1>
}

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App;