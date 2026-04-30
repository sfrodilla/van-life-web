import React from "react"

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/" className="title-container">
                <h1 className="title">#VANLIFE</h1>
            </Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}   
