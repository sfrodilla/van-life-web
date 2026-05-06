import React from "react"

import { useEffect, useState } from "react"

import "../../server"

import VanCard, { capitalize } from "./VanCard"


const baseVanTypes = ["simple", "rugged", "luxury"] as const;

type VanType = typeof baseVanTypes[number];

interface Vans {
    vans: Van[],
}

export interface Van {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    type: VanType,
}

export default function Vans() {
    const [vans, setVans] = useState<Van[]>([])

    const capitalizedVanTypes = baseVanTypes.map(
        (van) => capitalize(van)
    );

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then((data: Vans) => setVans(data.vans))
    }, [])


    return (
        <>
            <h2 className="van-title">Explore our van options</h2>
            <div className="van-filter-container">
                {capitalizedVanTypes.map((type) => (
                    <button key={type} className="van-filter-button">{type}</button>    
                ))}
                <button className="van-clear-filter-button">Clear filters</button>
            </div>
            <ul className="van-list">
                {
                    vans.length > 0 && vans.map((van) => {
                        return (
                            <VanCard key={van.id} van={van} />
                        )
                    })
                }
            </ul>
        </>
    )
}
