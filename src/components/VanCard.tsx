import React from "react"
import clsx from "clsx"


import { type Van } from "./Vans.tsx"

interface VanCardProps {
    van: Van
}

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export default function VanCard({ van }: VanCardProps) {

    const tagClassNames = clsx("van-tag", {
        "simple": van.type === "simple",
        "rugged": van.type === "rugged",
        "luxury": van.type === "luxury",
    })

    return (
        <li>
            <img src={van.imageUrl} alt={`Image for the ${van.name} van`} />
            <span className="van-info-container">
                <span className="van-name">{van.name}</span>
                <div className="van-price-container">
                    <span>${van.price}</span>
                    <br />
                    <span className="van-price-subtext">/day</span>
                </div>
            </span>
            <span className={tagClassNames}>{capitalize(van.type)}</span>
        </li>
    )
}