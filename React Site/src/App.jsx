import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero.jsx"
import Card from "../components/Card.jsx"
import data from "./data.jsx"


function App() {
      const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App
