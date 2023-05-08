import React from "react";
import './PokeDexIndex.css'
import { Card, Feed, CardDescription } from "semantic-ui-react";

export default function PokeDexIndex({pokeIndex}){
    const pokeDisplay = pokeIndex.results?.map((poke, idx) => {
        const pokeUrl = poke.url.split('/')
        const pokeId = pokeUrl[6]
        const pokeNameCap = poke.name.toUpperCase()
        return (
            <Card key={idx} className="pokeIndexCards">
                <Card.Content>#{pokeId} {pokeNameCap}</Card.Content>
            </Card>
        )
    })

    return(
            <Card.Group>
                {pokeDisplay}
            </Card.Group>
    )
}