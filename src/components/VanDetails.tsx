import React from "react"
import clsx from "clsx"

import { GoArrowLeft } from "react-icons/go";


import { type Van } from "./Vans.tsx"

interface VanCardProps {
    van: Van,
    onBackPressed: () => void
}


export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export default function VanCard({ van, onBackPressed }: VanCardProps) {

    const tagClassNames = clsx("van-tag", {
        "simple": van.type === "simple",
        "rugged": van.type === "rugged",
        "luxury": van.type === "luxury",
    })

    return (
        <section>
            <div className="van-details-back-button-container">
                <GoArrowLeft />
                <button onClick={onBackPressed} className="van-details-back-button">Back to all vans</button>
            </div>
            <img src={van.imageUrl} alt={`Image for the ${van.name} van`} className="van-details-image" />
            <div>
                <span className={tagClassNames}>{capitalize(van.type)}</span>
            </div>
            <div className="van-details-info-container">
                <h2 className="van-details-name">{van.name}</h2>
                <span className="van-details-price">${van.price}/day</span>
                <p>{van.description}</p>
                <button className="van-details-rent-button">Rent this van</button>
            </div>
        </section >
    )
}