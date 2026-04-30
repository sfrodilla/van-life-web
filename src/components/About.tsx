import React from "react"

import aboutImage from "/images/van-about.png"


export default function About() {
    return (
        <article>
            <div className="image-container">
                <img src={aboutImage} alt="The about page image" />
            </div>
            <section>
                <h3>
                    Don't squeeze in a Sedan when you can relax in a van.
                </h3>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="button-container">
                    <h4>
                        Your destination is waiting.
                        Your van is ready.
                    </h4>
                    <button>Explore our vans</button>
                </div>
            </section>
        </article>
    )

}