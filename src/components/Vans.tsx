import React from "react"

import { useEffect, useState } from "react"

import "../../server"

import VanCard, { capitalize } from "./VanCard"
import VanDetails from "./VanDetails"


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
    const [selectedVan, setSelectedVan] = useState<Van | undefined>(undefined)

    console.log('selectedVan ', selectedVan)

    const capitalizedVanTypes = baseVanTypes.map(
        (van) => capitalize(van)
    )

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then((data: Vans) => setVans(data.vans))
    }, [])

    function selectVan(vanId: number) {
        const van = vans.find((van) => van.id === vanId)
        setSelectedVan(van)
    }

    return (selectedVan !== undefined)
        ? <VanDetails van={selectedVan} onBackPressed={() => setSelectedVan(undefined)}/>
        : (
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
                                <VanCard key={van.id} van={van} onClick={selectVan} />
                            )
                        })
                    }
                </ul>
            </>
        )
}
